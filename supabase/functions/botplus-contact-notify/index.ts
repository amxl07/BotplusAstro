// supabase/functions/botplus-contact-notify/index.ts

const ADMIN_RECIPIENTS = ['justin@botplus.ae'];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  try {
    const payload = await req.json();
    const record = payload.record || payload;

    validateLead(record);

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const resendResult = await sendAdminEmail(record, RESEND_API_KEY);

    return new Response(
      JSON.stringify({ success: true, resend: resendResult }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error: any) {
    console.error('BotPlus notification error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});

function validateLead(record: any) {
  const requiredFields = ['name', 'company', 'email', 'subject', 'message'];
  const missingFields = requiredFields.filter((field) => !record?.[field]);

  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
}

async function sendAdminEmail(record: any, apiKey: string) {
  const submissionDate = record.created_at
    ? new Date(record.created_at).toLocaleString('en-GB')
    : new Date().toLocaleString('en-GB');
  const phoneDisplay = record.country_code
    ? `${record.country_code} ${record.phone_number || ''}`.trim()
    : (record.phone_number || 'N/A');
  const contactSubject = record.subject || 'BotPlus contact inquiry';
  const emailHtml = buildEmailHtml(record, phoneDisplay, submissionDate);
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'BotPlus Leads <onboarding@resend.dev>',
      to: ADMIN_RECIPIENTS,
      subject: `[BotPlus Contact] New BotPlus Contact: ${record.name} from ${record.company}`,
      html: emailHtml,
      reply_to: record.email,
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(`Resend error: ${JSON.stringify(result)}`);
  }

  console.log('BotPlus lead notification sent', {
    email: record.email,
    subject: contactSubject,
    recipients: ADMIN_RECIPIENTS,
    resend: result,
  });

  return result;
}

function buildEmailHtml(record: any, phoneDisplay: string, submissionDate: string) {
  const message = escapeHtml(record.message).replace(/\n/g, '<br>');

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px;">
      <div style="max-width: 640px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New BotPlus Contact Lead</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">Website contact form submission</p>
        </div>
        <div style="padding: 24px;">
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Lead Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${escapeHtml(record.name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Company</td><td style="padding: 8px 0; color: #1e293b;">${escapeHtml(record.company)}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #2563EB;"><a href="mailto:${escapeHtml(record.email)}" style="color: #2563EB;">${escapeHtml(record.email)}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; color: #1e293b;">${escapeHtml(phoneDisplay || 'N/A')}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Subject</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${escapeHtml(record.subject)}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Product</td><td style="padding: 8px 0; color: #1e293b;">${escapeHtml(record.product || 'botplus')}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Source</td><td style="padding: 8px 0; color: #1e293b;">${escapeHtml(record.source || 'site-contact')}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Submitted</td><td style="padding: 8px 0; color: #1e293b;">${escapeHtml(submissionDate)}</td></tr>
            </table>
          </div>
          <div style="background: #EFF6FF; border-radius: 8px; padding: 20px; border: 1px solid #BFDBFE;">
            <h2 style="color: #1e3a8a; margin: 0 0 12px 0; font-size: 18px;">Message</h2>
            <p style="color: #1e293b; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${escapeHtml(record.email)}?subject=Re: ${encodeURIComponent(record.subject || 'Your BotPlus inquiry')}" style="display: inline-block; background: #2563EB; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to Lead</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
