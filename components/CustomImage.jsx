import Image from 'next/image';
import {useImageFetcher} from '@/hooks/image hooks/useImageFetcher';
import ImageLoader from "@/components/ui/ImageLoader";

export default function CustomImage({src, alt, width, height}) {
    const {imageUrl, isLoading, error} = useImageFetcher(src);
    if (error) {
        return <div>Error loading image</div>;
    }

    return (
        <>
            {isLoading && (
                <ImageLoader
                    width={width}
                    height={height}
                />
            )}
            {error && (
                <div>
                    Error loading image: {error.message}
                </div>
            )}
            {!isLoading &&
                !error &&
                imageUrl !== null && (
                    <Image
                        src={imageUrl}
                        alt={alt}
                        width={width}
                        height={height}
                        quality={85}
                        priority={true}
                    />
                )}
        </>
    );
}
