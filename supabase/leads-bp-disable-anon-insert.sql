-- ============================================
-- BOTPLUS - DISABLE PUBLIC INSERTS INTO LEADS_BP
-- ============================================
-- Run this after botplus-contact-submit is deployed and tested.
-- The Edge Function inserts with the service role key, so anonymous browser users
-- should not have direct INSERT permission on public.leads_bp.

-- Review current policies first.
SELECT policyname, cmd, roles, qual, with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'leads_bp';

-- Drop INSERT policies that include anon/public access.
DO $$
DECLARE
  policy_record RECORD;
BEGIN
  FOR policy_record IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'leads_bp'
      AND cmd = 'INSERT'
      AND (roles::text LIKE '%anon%' OR roles::text LIKE '%public%')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.leads_bp', policy_record.policyname);
  END LOOP;
END $$;

-- Confirm no anonymous INSERT policy remains.
SELECT policyname, cmd, roles, qual, with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'leads_bp'
  AND cmd = 'INSERT';
