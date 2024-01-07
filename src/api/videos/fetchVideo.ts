'use server';
import { supabaseKEY, supabaseURL } from "@/utils/Supabase";


export async function fetchVideo (videoPath: string) {
	try {
		const video = await fetch (
			`${supabaseURL}/storage/v1/object/public/${videoPath}`,
			{
				headers: {
					apikey: supabaseKEY
				}
			}
		);

		if (! video.ok) {
			console.error ('Error fetching video');
		}

		return video.url;
	} catch (error) {
		throw new Error (`Error fetching video: ${error.message}`);
	}
}
