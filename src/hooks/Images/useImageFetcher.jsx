import { fetchImage } from '@/src/api/images/FetchImage';
import { useQuery } from 'react-query';

export function useImageFetcher (src) {
  const queryKey = ['image', src];

  const { data: imageUrl, status } = useQuery (queryKey, () => fetchImage (src), {
    enabled: !! src
  });

  const loading = status === 'loading';
  const error = status === 'error';

  return {
    imageUrl,
    loading,
    error
  };
}
