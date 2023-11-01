"use server";
import { supabase } from "@/utils/supabase/Supabase";

export async function fetchImage(imagePath) {
	try {
		const { data, error } = await supabase.storage
			.from("curology")
			.createSignedUrl(imagePath, 86400);

		if (error) {
			throw new Error("Failed to create signed URL");
		}

		return data.signedUrl;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch signed image");
	}
}
