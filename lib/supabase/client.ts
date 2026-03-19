import { createBrowserClient } from '@supabase/ssr'
import { Database } from '../db/types'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing browser environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. ' +
      'Please check your .env.local file or Vercel project settings.'
    )
  }

  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey
  )
}
