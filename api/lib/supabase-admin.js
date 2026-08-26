import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase admin environment variables. Make sure SUPABASE_SERVICE_ROLE_KEY is set.");
}

// Service role client bypasses RLS. USE WITH CAUTION.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
