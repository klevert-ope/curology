import dynamic from 'next/dynamic';

const CustomVideo = dynamic(() => import('@/components/Videos/CustomVideo'));

export function VideoPlayer({videoSrc, id, height, width}) {
	return (
		<div id={id}>
			<CustomVideo videoSrc={videoSrc} width={width} height={height}/>
		</div>
);
}
