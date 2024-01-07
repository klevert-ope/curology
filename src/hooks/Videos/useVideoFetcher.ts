import { fetchVideo } from "@/api/videos/fetchVideo";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";


interface UseVideoFetcherResult {
	videoSource: string ;
	pending: boolean;
	success: boolean;
	error: boolean;
}

export function UseVideoFetcher({ videoSrc }: { videoSrc: string }): UseVideoFetcherResult {
	const queryKey: QueryKey = ['video', videoSrc];

	const fetchVideoMemoized = useCallback(() => fetchVideo(videoSrc), [videoSrc]);

	const { data: videoSource, status } = useQuery({
		queryKey,
		queryFn: fetchVideoMemoized,
		enabled: !!videoSrc,
	});

	const pending: boolean = status === 'pending';
	const error: boolean = status === 'error';
	const success: boolean = status === 'success';

	return {
		videoSource,
		pending,
		success,
		error,
	};
}
