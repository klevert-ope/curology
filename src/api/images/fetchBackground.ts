'use server';
import { supabase } from "@/utils/Supabase";

export async function fetchBackground (imagePath: string) {
	try {
		const { data, error } = await supabase.storage
			.from ('curology')
			.createSignedUrl (imagePath, 157784760);

		if (error) {
			console.error ('Failed to create signed URL:', error.message);
		}

		return data.signedUrl;
	} catch (error) {
		throw new Error (`Error fetching video: ${error.message}`);
	}
}
