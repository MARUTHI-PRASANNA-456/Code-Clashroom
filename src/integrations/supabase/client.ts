// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kvzbkzhreuydbjxjumud.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2emJremhyZXV5ZGJqeGp1bXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjg5NzQsImV4cCI6MjA2ODYwNDk3NH0.ehIYNFeemEPs7OirpPVxCCfjpl_iB8Pz3DByvmphr1g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});