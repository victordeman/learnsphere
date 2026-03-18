/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { revalidatePath } from 'next/cache'
import { redirect, unstable_rethrow } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function signIn(formData: FormData) {
  try {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/')
  } catch (error: any) {
    unstable_rethrow(error)
    return { error: error.message || 'An unexpected error occurred during sign in.' }
  }
}

export async function signUp(formData: FormData) {
  try {
    const supabase = await createClient()
    const origin = (await headers()).get('origin')

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fullName = formData.get('fullName') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      return { error: error.message }
    }

    return { success: 'Check your email to continue the sign in process.' }
  } catch (error: any) {
    unstable_rethrow(error)
    return { error: error.message || 'An unexpected error occurred during sign up.' }
  }
}

export async function signOut() {
  try {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/auth/signin')
  } catch (error: any) {
    unstable_rethrow(error)
    return { error: error.message || 'An unexpected error occurred during sign out.' }
  }
}

export async function forgotPassword(formData: FormData) {
  try {
    const supabase = await createClient()
    const origin = (await headers()).get('origin')
    const email = formData.get('email') as string

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?next=/auth/reset-password`,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: 'Check your email for the password reset link.' }
  } catch (error: any) {
    unstable_rethrow(error)
    return { error: error.message || 'An unexpected error occurred.' }
  }
}

export async function updatePassword(formData: FormData) {
  try {
    const supabase = await createClient()
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      return { error: 'Passwords do not match.' }
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    })

    if (error) {
      return { error: error.message }
    }

    redirect('/auth/signin?message=Password updated successfully')
  } catch (error: any) {
    unstable_rethrow(error)
    return { error: error.message || 'An unexpected error occurred.' }
  }
}

export async function updateProfile(formData: FormData) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error('Unauthorized')
    }

    const fullName = formData.get('fullName') as string
    const preferredModel = formData.get('preferredModel') as string

    const { error } = await (supabase
      .from('profiles') as any)
      .update({
        full_name: fullName,
        preferred_model: preferredModel,
      })
      .eq('id', user.id)

    if (error) {
      throw new Error(error.message)
    }

    revalidatePath('/profile')
  } catch (error: any) {
    unstable_rethrow(error)
  }
}
