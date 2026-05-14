-- ============================================
-- BOTPLUS - LEADS_BP EMAIL NOTIFICATION TRIGGER
-- ============================================
-- Run this in Supabase SQL Editor after replacing YOUR_SUPABASE_SERVICE_ROLE_KEY.

CREATE EXTENSION IF NOT EXISTS pg_net;

CREATE OR REPLACE FUNCTION public.notify_new_lead_bp()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://ssxnamsctmryhwfdytya.supabase.co/functions/v1/botplus-contact-notify'::text,
    body := jsonb_build_object(
      'record', row_to_json(NEW),
      'table', 'leads_bp'
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer YOUR_SUPABASE_SERVICE_ROLE_KEY'
    ),
    timeout_milliseconds := 10000
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trigger_new_lead_bp ON public.leads_bp;

CREATE TRIGGER trigger_new_lead_bp
  AFTER INSERT ON public.leads_bp
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_lead_bp();

-- Verification
SELECT trigger_name, event_manipulation, event_object_table
FROM information_schema.triggers
WHERE trigger_schema = 'public'
  AND event_object_table = 'leads_bp';
