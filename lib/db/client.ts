import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing in lib/db/client.ts');
}

export const supabase = createClient<Database>(
  supabaseUrl || 'http://placeholder.url',
  supabaseAnonKey || 'placeholder-key'
);
