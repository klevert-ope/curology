'use server';
import { supabase } from "@/utils/Supabase";
import sharp from "sharp";

export async function fetchImage(imagePath: string) {
	try {
		const { data, error } = await supabase.storage
			.from ('curology')
			.createSignedUrl (imagePath, 157784760);

		if (error) {
			console.error ('Failed to create signed URL:', error.message);
		}

		const signedUrl = data.signedUrl;
		const response = await fetch (signedUrl);
		const arrayBuffer = await response.arrayBuffer ();
		const buffer = Buffer.from (arrayBuffer);
		const metadata = await sharp (buffer).metadata ();

		if (! metadata && ! metadata.width && ! metadata.height) {
			console.log ('Failed to retrieve image dimensions');
		}

		return {
			signedUrl,
			dimensions: { width: metadata.width, height: metadata.height }
		};
	} catch (error) {
		throw new Error (`Error creating signed URL: ${error.message}`);
	}
}
