'use server';
import { supabase } from "@/utils/Supabase";

export async function fetchProduct () {
	try {
		const { data, error } = await supabase
			.from ('products')
			.select ('*');

		if (error) {
			console.error ('Error fetching products:', error.message);
		}

		return { products: data };
	} catch (error) {
		throw new Error (`Error fetching products: ${error.message}`);
	}
}
