import Image from "next/image";
import ImageLoader from "@/components/ui/ImageLoader";
import { useImageFetcher } from "@/hooks/image hooks/useImageFetcher";

const CustomImage = ({
	src,
	alt,
	width,
	height,
}) => {
	const { imageUrl, isLoading, error } =
		useImageFetcher(src);

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
};

export default CustomImage;
