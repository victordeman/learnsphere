import { createBrowserClient } from '@supabase/ssr'
import { Database } from '../db/types'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are not defined. Please check your .env.local file or Vercel settings.')
    // Return a dummy client or handle it in the UI
  }

  return createBrowserClient<Database>(
    supabaseUrl || '',
    supabaseAnonKey || ''
  )
}
