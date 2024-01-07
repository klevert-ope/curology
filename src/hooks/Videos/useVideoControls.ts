import useEvent from "@react-hook/event";
import { RefObject, useCallback, useState } from "react";

interface VideoControls {
	isPaused: boolean;
	progress: number;
	isBuffering: boolean;
	togglePlayPause: () => void;
}

interface UseVideoControlsProps {
	current: RefObject<HTMLVideoElement | null>;
}

export function useVideoControls({ current: video }: UseVideoControlsProps): VideoControls {
	const [isPaused, setIsPaused] = useState(true);
	const [progress, setProgress] = useState(0);
	const [isBuffering, setIsBuffering] = useState(false);

	const updateProgressBar = useCallback(() => {
		if (video?.current) {
			setProgress((prevProgress) =>
				video.current.duration
					? (video.current.currentTime / video.current.duration) * 100
					: prevProgress
			);
		}
	}, [video]);

	const updatePlayPauseState = useCallback(() => {
		if (video?.current) {
			setIsPaused(video.current.paused);
		}
	}, [video]);

	const handleWaitingEvent = useCallback(() => {
		setIsBuffering(true);
	}, []);

	const handleCanPlayEvent = useCallback(() => {
		setIsBuffering(false);
	}, []);

	const togglePlayPause = useCallback(() => {
		try {
			if (video?.current) {
				video.current.paused ? video.current.play() : video.current.pause();
			}
		} catch (error) {
			console.error('Error toggling play/pause:', error);
		}
	}, [video]);

	useEvent(video?.current, 'timeupdate', updateProgressBar);
	useEvent(video?.current, 'play', updatePlayPauseState);
	useEvent(video?.current, 'pause', updatePlayPauseState);
	useEvent(video?.current, 'waiting', handleWaitingEvent);
	useEvent(video?.current, 'canplay', handleCanPlayEvent);

	return { isPaused, progress, isBuffering, togglePlayPause };
}
