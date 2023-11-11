import {fetchVideo} from '@/api/VideoFetcher';
import {useQuery} from 'react-query';

export function useVideoFetcher(videoSrc) {
	const {
		data: videoSource,
		isLoading,
		isError,
	} = useQuery(['video', videoSrc], () => fetchVideo(videoSrc));

	return {
		videoSource,
		isLoading,
		isError,
	};
}
