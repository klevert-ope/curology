import {useQuery} from 'react-query';
import {fetchImage} from '@/api/FetchBackground';

export function useBackgroundFetcher(src) {
    const queryKey = ['image', src];

    const {
        data: imageUrl,
        error,
    } = useQuery(queryKey, () => fetchImage(src), {enabled: !!src,});

    return {
        imageUrl,
        error,
    };
}
