import { fetchBackground } from "@/api/images/fetchBackground";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

interface UseBackgroundFetcherProps {
	src: string | undefined;
}

interface UseBackgroundFetcherResult {
	imageUrl: string | undefined;
	error: boolean;
}

export function useBackgroundFetcher({ src }: UseBackgroundFetcherProps): UseBackgroundFetcherResult {
	const queryKey: QueryKey = ['image', src];

	const fetchImageMemoized = useCallback(() => fetchBackground(src), [src]);

	const { data: imageUrl, status } = useQuery<string>({
		queryKey,
		queryFn: fetchImageMemoized,
		enabled: !!src,
	});

	const error = status === 'error';

	return {
		imageUrl,
		error,
	};
}
