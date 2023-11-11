import { supabaseKEY, supabaseURL } from "@/utils/supabase/Supabase";

export async function fetchVideo(videoPath) {
  const response = await fetch(
    `${supabaseURL}/storage/v1/object/public/${videoPath}`,
    {
      headers: {
        apikey: supabaseKEY
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch video");
  }

  return response.url;
}
