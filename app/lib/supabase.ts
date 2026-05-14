// These are publishable, browser-safe Supabase keys (Stripe-style "pk_*").
// Row-level security on the `Lead` table is what enforces what they can do.
export const SUPABASE_URL = "https://hjcfexoxratletelckom.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_qPrNQ22P8qQomJFtacHWEg_GwTspyaH";

export const SUPABASE_LEAD_ENDPOINT = `${SUPABASE_URL}/rest/v1/Lead`;
