-- Seed Data Migration: Create admin and student users

-- Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
  admin_id UUID := gen_random_uuid();
  student_id UUID := gen_random_uuid();
  admin_email TEXT := 'victor@learnsphere.com';
  student_email TEXT := 'mark@learnsphere.com';
  admin_password TEXT := crypt('victor@2026', gen_salt('bf'));
  student_password TEXT := crypt('mark@2026', gen_salt('bf'));
BEGIN
  -- Insert Admin User into auth.users
  INSERT INTO auth.users (
    id,
    instance_id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token,
    aud,
    role
  )
  VALUES (
    admin_id,
    '00000000-0000-0000-0000-000000000000',
    admin_email,
    admin_password,
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Victor"}',
    now(),
    now(),
    '',
    '',
    '',
    '',
    'authenticated',
    'authenticated'
  ) ON CONFLICT (email) DO NOTHING;

  -- Insert Student User into auth.users
  INSERT INTO auth.users (
    id,
    instance_id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token,
    aud,
    role
  )
  VALUES (
    student_id,
    '00000000-0000-0000-0000-000000000000',
    student_email,
    student_password,
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Mark"}',
    now(),
    now(),
    '',
    '',
    '',
    '',
    'authenticated',
    'authenticated'
  ) ON CONFLICT (email) DO NOTHING;

  -- Update Admin Role in public.profiles
  -- The on_auth_user_created trigger in 001_initial_schema.sql 
  -- will have already created the profiles as 'learner'.
  UPDATE public.profiles
  SET role = 'admin'
  WHERE email = admin_email;

END $$;
