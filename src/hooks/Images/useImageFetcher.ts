import { fetchImage } from "@/api/images/fetchImage";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface ImageData {
	signedUrl: string | undefined;
	dimensions: Record<string, undefined> | undefined;
}

export function useImageFetcher(src: string | string[]): {
	imageUrl: string | undefined;
	dimensions: Record<string, undefined> | undefined;
	pending: boolean;
	error: boolean;
	success: boolean;
} {
	const queryKey = ['image', src];

	const {
		data: imageData,
		status,
	}: UseQueryResult<ImageData, undefined> = useQuery({
		queryKey,
		queryFn: () => fetchImage(src),
		enabled: !!src,
	});

	const imageUrl = imageData?.signedUrl;
	const dimensions = imageData?.dimensions || {};
	const pending = status === 'pending';
	const error = status === 'error';
	const success = status === 'success';

	return {
		imageUrl,
		dimensions,
		pending,
		error,
		success,
	};
}
