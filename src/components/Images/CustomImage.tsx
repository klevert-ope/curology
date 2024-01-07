import { useImageFetcher } from "@/hooks/Images/useImageFetcher";
import Image from "next/image";
import React from "react";


interface CustomImageProps {
	src: string;
	alt: string;
	aspectRatio: number;
}

export default function CustomImage({ src, alt, aspectRatio }: Readonly<CustomImageProps>): React.JSX.Element {
	const { imageUrl, dimensions, pending, error, success } = useImageFetcher(src);

	const skeletonStyles = {
		width: '100%',
		height: '100%',
		background: 'rgb(245, 245, 245)',
		animation: 'pulse 1s infinite',
		aspectRatio: aspectRatio || 'unset',
	};

	return (
		<>
			{pending && <div style={skeletonStyles}></div>}

			{error && <div className="errorMessage">Error loading image</div>}

			{success && (
				<Image
					src={imageUrl}
					alt={alt}
					width={dimensions.width}
					height={dimensions.height}
					quality={80}
					loading="eager"
				/>
			)}
		</>
	);
}


