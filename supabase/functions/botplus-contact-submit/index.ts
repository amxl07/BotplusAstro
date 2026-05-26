// supabase/functions/botplus-contact-submit/index.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BLOCKED_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
]);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  try {
    const payload = await req.json();
    const leadData = normalizeLead(payload);
    const validationError = validateLead(leadData);

    if (validationError) {
      return jsonResponse({ error: validationError }, 400);
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SERVICE_ROLE_KEY = Deno.env.get('SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
      throw new Error('Supabase service credentials are not configured');
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { error } = await supabase
      .from('leads_bp')
      .insert([leadData]);

    if (error) {
      if (error.code === '23505') {
        return jsonResponse({ success: true, duplicate: true });
      }

      throw error;
    }

    return jsonResponse({ success: true });
  } catch (error: any) {
    console.error('BotPlus contact submit error:', error);
    return jsonResponse({ error: 'Error sending message. Please try again.' }, 500);
  }
});

function normalizeLead(payload: any) {
  return {
    name: String(payload?.name || '').trim(),
    company: String(payload?.company || '').trim(),
    email: String(payload?.email || '').trim().toLowerCase(),
    country_code: String(payload?.country_code || '+971').trim(),
    phone_number: String(payload?.phone_number || '').trim() || null,
    subject: String(payload?.subject || '').trim(),
    message: String(payload?.message || '').trim(),
    source: 'site-contact',
    product: 'botplus',
    created_at: new Date().toISOString(),
  };
}

function validateLead(record: any): string | null {
  const requiredFields = ['name', 'company', 'email', 'subject', 'message'];
  const missingField = requiredFields.find((field) => !record[field]);

  if (missingField) {
    return `Please provide ${missingField}.`;
  }

  if (!isValidEmail(record.email)) {
    return 'Please enter a valid business email address.';
  }

  const emailDomain = record.email.split('@')[1]?.toLowerCase() || '';
  if (BLOCKED_EMAIL_DOMAINS.has(emailDomain)) {
    return 'Please use your business email address.';
  }

  if (record.phone_number && /[a-z]/i.test(record.phone_number)) {
    return 'Phone number cannot contain letters.';
  }

  if (record.subject.length < 4) {
    return 'Subject must be at least 4 characters.';
  }

  if (record.message.length < 15) {
    return 'Message must be at least 15 characters.';
  }

  const textFields = ['name', 'company', 'subject', 'message'];
  const gibberishField = textFields.find((field) => isObviousGibberish(record[field]));

  if (gibberishField) {
    return `Please enter a valid ${gibberishField}.`;
  }

  return null;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isObviousGibberish(value: string): boolean {
  const text = String(value || '').trim();

  if (/\s/.test(text) || text.length <= 12 || !/^[a-z]+$/i.test(text)) {
    return false;
  }

  const hasUpper = /[A-Z]/.test(text);
  const hasLower = /[a-z]/.test(text);
  const vowelCount = (text.match(/[aeiou]/gi) || []).length;
  const vowelRatio = vowelCount / text.length;
  const caseSwitches = (text.match(/[a-z][A-Z]|[A-Z][a-z]/g) || []).length;

  return hasUpper && hasLower && caseSwitches >= 3 && (vowelRatio < 0.25 || vowelRatio > 0.75);
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json',
    },
  });
}
