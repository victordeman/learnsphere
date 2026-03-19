-- Seed Data Migration: Create admin and student users

-- Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
  admin_id UUID := gen_random_uuid();
  student_id UUID := gen_random_uuid();
  admin_email TEXT := 'admin@learnsphere.com';
  student_email TEXT := 'student@learnsphere.com';
  hashed_password TEXT := crypt('password123', gen_salt('bf'));
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
    recovery_token
  )
  VALUES (
    admin_id,
    '00000000-0000-0000-0000-000000000000',
    admin_email,
    hashed_password,
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"System Administrator"}',
    now(),
    now(),
    '',
    '',
    '',
    ''
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
    recovery_token
  )
  VALUES (
    student_id,
    '00000000-0000-0000-0000-000000000000',
    student_email,
    hashed_password,
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Jane Learner"}',
    now(),
    now(),
    '',
    '',
    '',
    ''
  ) ON CONFLICT (email) DO NOTHING;

  -- Update Admin Role in public.profiles
  -- The on_auth_user_created trigger in 001_initial_schema.sql 
  -- will have already created the profiles as 'learner'.
  UPDATE public.profiles
  SET role = 'admin'
  WHERE email = admin_email;

END $$;
