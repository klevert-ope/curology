import { useQuery } from "react-query";
import { fetchImage } from "@/api/FetchImage";

export function useImageFetcher(src) {
	const queryKey = ["image", src];

	const {
		data: imageUrl,
		isLoading,
		error,
	} = useQuery(queryKey, () => fetchImage(src), {
		enabled: !!src,
	});

	return {
		imageUrl,
		isLoading,
		error,
	};
}
