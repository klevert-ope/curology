import ImageLoader from '@/src/components/Images/ImageLoader';
import { useImageFetcher } from '@/src/hooks/Images/useImageFetcher';
import Image from 'next/image';

export default function CustomImage ({ src, alt }) {
  const { imageUrl, loading, error } = useImageFetcher (src);

  return (
    <>
      {loading ? (
        <ImageLoader />
      ) : error ? (
        <div>Error loading image: {error.message}</div>
      ) : imageUrl && (
        <Image
          src={imageUrl}
          alt={alt}
          width='400'
          height='500'
          quality={85}
          loading='eager'
          className='aspect-auto'
        />
      )}
    </>
  );
}
