import {useCallback, useEffect, useRef} from 'react';

export function useVideoPlayer(videoSource) {
	const videoRef = useRef(null);
	const hlsRef = useRef(null);
	const loadHlsPromiseRef = useRef(null);

	const handleManifestParsed = useCallback(() => {
		videoRef.current && videoRef.current.play();
	}, []);

	useEffect(() => {
		let isMounted = true;

		const loadHls = async () => {
			try {
				const {default: Hls} = await import('hls.js');

				if (isMounted && videoSource && Hls.isSupported()) {
					const video = videoRef.current;

					if (!video) {
						videoRef.current = document.createElement('video');
					}

					hlsRef.current = new Hls();
					hlsRef.current.loadSource(videoSource);
					hlsRef.current.attachMedia(video);
					hlsRef.current.on(Hls.Events.MANIFEST_PARSED, handleManifestParsed);
				}
			} catch (error) {
				console.error('Error loading Hls:', error);
			}
		};

		loadHlsPromiseRef.current = loadHls();

		return () => {
			isMounted = false;

			if (hlsRef.current) {
				hlsRef.current.off(Hls.Events.MANIFEST_PARSED, handleManifestParsed);
				hlsRef.current.destroy();
			}

			if (loadHlsPromiseRef.current) {
				loadHlsPromiseRef.current.catch(() => {
				});
			}
		};
	}, [videoSource, handleManifestParsed]);

	return {videoRef};
}
