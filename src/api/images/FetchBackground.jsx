'use server';

import { supabase } from '@/src/utils/Supabase';

export async function fetchImage (imagePath) {
  const { data, error } = await supabase.storage
    .from ('curology')
    .createSignedUrl (imagePath, 157784760);

  if (error) {
    throw new Error ('Failed to create signed URL');
  }

  return data.signedUrl;
}
