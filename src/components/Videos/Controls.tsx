import { useVideoControls } from "@/hooks/Videos/useVideoControls";
import React, { useMemo } from "react";
import { RxPause, RxPlay } from "react-icons/rx";


export default function Controls({ videoRef }): React.JSX.Element {
	const { isPaused, progress, isBuffering, togglePlayPause } = useVideoControls({
		current: videoRef,
	});

	const iconStyle = {
		width: '25px',
		height: '25px',
		color: 'rgb(240, 240, 240)'
	};

	const progressCircle: React.JSX.Element = useMemo(() => (
		<svg width="100%" height="100%" viewBox="0 0 100 100">
			<g transform="rotate(-90, 50, 50)">
				<circle cx="50" cy="50" r="45" fill="none" stroke="rgb(240, 240, 240)" strokeWidth="6" />
				{isBuffering ? (
					<circle
						cx="50"
						cy="50"
						r="45"
						fill="none"
						stroke="rgb(37, 99, 235)"
						strokeWidth="6"
						strokeDasharray="283"
						strokeDashoffset={283 - (progress / 100) * 283}
						className="animate-pulse"
					/>
				) : (
					<circle
						cx="50"
						cy="50"
						r="45"
						fill="none"
						stroke="rgb(37, 99, 235)"
						strokeWidth="6"
						strokeDasharray="283"
						strokeDashoffset={283 - (progress / 100) * 283}
						style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
					/>
				)}
			</g>
		</svg>
	), [progress, isBuffering]);

	return (
		<div className="absolute bottom-5 left-5 z-10 max-[500px]:bottom-3 max-[500px]:left-3">
			<div style={{ position: 'relative', width: '40px', height: '40px' }}>
				{progressCircle}
				<button
					type="button"
					className="group focus:outline-none"
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
					<div>

						{isPaused ?
							<RxPlay
								style={iconStyle}
							/>
						 :
							<RxPause
								style={iconStyle}
							/>
						}
					</div>
				</button>
			</div>
		</div>
	);
}


