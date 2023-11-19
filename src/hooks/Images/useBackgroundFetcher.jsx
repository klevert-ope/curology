import { fetchImage } from '@/src/api/images/FetchBackground';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export function useBackgroundFetcher (src) {
  const queryKey = ['image', src];

  const fetchImageMemoized = useCallback (() => fetchImage (src), [src]);

  const {
    data: imageUrl,
    status
  } = useQuery (queryKey, fetchImageMemoized, {
    enabled: !! src
  });

  const error = status === 'error';

  return {
    imageUrl,
    error
  };
}
