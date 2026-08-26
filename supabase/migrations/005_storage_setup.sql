-- 005_storage_setup.sql

-- Insert product-images bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policy: Public can view images
CREATE POLICY "Public can view product images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'product-images' );

-- Policy: Admin can insert images
CREATE POLICY "Admins can upload product images"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'product-images' AND
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- Policy: Admin can update images
CREATE POLICY "Admins can update product images"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'product-images' AND
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- Policy: Admin can delete images
CREATE POLICY "Admins can delete product images"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'product-images' AND
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);
