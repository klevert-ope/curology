import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

const Controls = ({videoRef}) => {
	const [isPaused, setIsPaused] = useState(true);
	const [progress, setProgress] = useState(0);
	const svgRef = useRef(null);

	const updateProgressBar = useCallback(() => {
		const video = videoRef.current;
		const progress = (video.currentTime / video.duration) * 100;
		setProgress(progress);
	}, [videoRef]);

	const updatePlayPauseState = useCallback(() => {
		setIsPaused(videoRef.current.paused);
	}, [videoRef]);

	useEffect(() => {
		const video = videoRef.current;

		if (video) {
			video.addEventListener('timeupdate', updateProgressBar);
			video.addEventListener('play', updatePlayPauseState);
			video.addEventListener('pause', updatePlayPauseState);

			return () => {
				video.removeEventListener('timeupdate', updateProgressBar);
				video.removeEventListener('play', updatePlayPauseState);
				video.removeEventListener('pause', updatePlayPauseState);
			};
		}
	}, [videoRef, updateProgressBar, updatePlayPauseState]);

	const togglePlayPause = useCallback(() => {
		const video = videoRef.current;

		if (video) {
			if (video.paused) {
				video.play().catch((error) => console.error('Error toggling play/pause:', error));
			} else {
				video.pause();
			}
		}
	}, [videoRef]);

	const svgElement = useMemo(() => (
		<svg
			ref={svgRef}
			width='100%'
			height='100%'
			viewBox='0 0 100 100'
		>
			<g transform='rotate(-90, 50, 50)'>
				<circle cx='50' cy='50' r='45' fill='none' stroke='#000' strokeWidth='6'/>
				<circle
					cx='50'
					cy='50'
					r='45'
					fill='none'
					stroke='rgb(252,211,77)'
					strokeWidth='6'
					strokeDasharray='283'
					strokeDashoffset={283 - (progress / 100) * 283}
					style={{transition: 'stroke-dashoffset 0.3s ease-in-out'}}
				/>
			</g>
		</svg>
	), [progress]);

	return (
		<div>
			<div className='absolute bottom-5 left-10 z-10'>
				<div style={{position: 'relative', width: '40px', height: '40px'}}>
					{svgElement}
					<button
						className='group cursor-pointer'
						onClick={togglePlayPause}
						aria-label={isPaused ? 'Play' : 'Pause'}
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 2,
						}}
					>
						<div
							className='fill-white group-hover:fill-amber-300 transition-colors duration-200 ease-in-out'
						>
							{isPaused ? (
								<svg width={40} height={40} viewBox='0 0 32 32'>
									<path d='M10.968 23V9l12.762 7-12.762 7z'/>
								</svg>
							) : (
								<svg width={35} height={35} viewBox='0 0 32 32'>
									<path d='M18.432 7.5h4.547v17h-4.547zm-9.41 0h4.545v17H9.022z'/>
								</svg>
							)}
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Controls;
