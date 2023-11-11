import ImageLoader from "@/components/Images/ImageLoader";
import {useImageFetcher} from '@/hooks/Images/useImageFetcher';
import Image from 'next/image';

export default function CustomImage({src, alt}) {
	const {imageUrl, isLoading, error} = useImageFetcher(src);
	if (error) {
		return <div>Error loading image</div>;
	}

	return (
		<>
			{isLoading && (
				<ImageLoader/>
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
						layout="responsive"
						width='400'
						height='500'
						quality={85}
						priority={true}
					/>
				)}
		</>
	);
}
