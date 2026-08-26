-- 006_custom_product_fields.sql

-- Add missing column for shipping_returns to products table
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS shipping_returns TEXT;

-- Update the admin role logic trigger for sujaldesai6989@gmail.com
-- This ensures that when the user signs up, they are automatically granted admin access
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    CASE WHEN new.email = 'sujaldesai6989@gmail.com' THEN 'admin' ELSE 'customer' END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger if needed
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Ensure all existing instances of sujaldesai6989@gmail.com are set to admin
UPDATE public.profiles SET role = 'admin' WHERE email = 'sujaldesai6989@gmail.com';
