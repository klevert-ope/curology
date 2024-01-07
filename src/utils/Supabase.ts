import { createClient } from "@supabase/supabase-js";

export const supabaseURL = 'https://essmnbcneybekiriuadi.supabase.co';
export const supabaseKEY = process.env.SUPABASE_KEY;
export const supabase = createClient (supabaseURL, supabaseKEY);

