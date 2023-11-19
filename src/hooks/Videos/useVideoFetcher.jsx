import { fetchVideo } from '@/src/api/videos/VideoFetcher';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export function useVideoFetcher (videoSrc) {
  const queryKey = ['video', videoSrc];

  const fetchVideoMemoized = useCallback (() => fetchVideo (videoSrc), [videoSrc]);

  const { data: videoSource, status } = useQuery (queryKey, fetchVideoMemoized, {
    enabled: !! videoSrc
  });

  const loading = status === 'loading';
  const error = status === 'error';

  return {
    videoSource,
    loading,
    error
  };
}
