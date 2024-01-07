import { UseVideoFetcher } from "@/hooks/Videos/useVideoFetcher";
import dynamic from "next/dynamic";
import React from "react";
import { Usehlsplayer } from "usehlsvideoplayer";

const Controls = dynamic(() => import('@/components/Videos/Controls'), {ssr: false});

interface CustomVideoProps {
	videoSrc: string ;
	aspectRatio: number;
	id: string;
}

export default function CustomVideo({ videoSrc, aspectRatio, id }: Readonly<CustomVideoProps>): React.JSX.Element {
	const { videoSource, pending, error, success } = UseVideoFetcher({videoSrc});
	const { videoRef } = Usehlsplayer(videoSource, { enableSoftwareAES: true, enableWorker: true });

	const handleContextMenu = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>): void => {
		e.preventDefault();
	};

	const skeletonStyles: React.CSSProperties = {
		width: '100%',
		height: '100%',
		background: 'rgb(245, 245, 245)',
		animation: 'pulse 1s infinite',
		aspectRatio: aspectRatio || 'unset',
	};

	const videoStyles: React.CSSProperties = {
		aspectRatio: aspectRatio || 'unset',
		objectFit: 'cover',
	};

	return (
		<>
			{pending && <div id={id} style={skeletonStyles}></div>}

			{error && <div className='errorMessage'>Error loading video</div>}

			{success && (
				<div className='relative'>
					<Controls videoRef={videoRef} />
					<video
						id={id}
						ref={videoRef}
						controls={false}
						preload={'auto'}
						playsInline={true}
						disablePictureInPicture={true}
						muted={true}
						onContextMenu={handleContextMenu}
						style={videoStyles}
					>
						<source src={videoSource} type='application/x-mpegURL' />
					</video>
				</div>
			)}
		</>
	);
}
