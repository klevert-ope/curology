import { useVideoControls } from '@/src/hooks/Videos/useVideoControls';
import { useMemo } from 'react';

const Controls = ({ videoRef }) => {
  const { isPaused, progress, isBuffering, togglePlayPause } = useVideoControls (videoRef);

  const svgElement = useMemo (() => (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 100 100'
    >
      <g transform='rotate(-90, 50, 50)'>
        <circle cx='50'
                cy='50'
                r='45'
                fill='none'
                stroke='rgb(0, 0, 0)'
                strokeWidth='6' />
        {isBuffering ? (
          <circle
            cx='50'
            cy='50'
            r='45'
            fill='none'
            stroke='rgb(252, 211, 77)'
            strokeWidth='6'
            strokeDasharray='283'
            strokeDashoffset={283 - (progress / 100) * 283}
            className='animate-pulse'
          />
        ) : (
          <circle
            cx='50'
            cy='50'
            r='45'
            fill='none'
            stroke='rgb(252, 211, 77)'
            strokeWidth='6'
            strokeDasharray='283'
            strokeDashoffset={283 - (progress / 100) * 283}
            style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
          />
        )}
      </g>
    </svg>
  ), [progress, isBuffering]);

  return (
    <>
      <div className='absolute bottom-5 left-5 max-[500px]:left-3 max-[500px]:bottom-3 z-10'>
        <div style={{ position: 'relative', width: '40px', height: '40px' }}>
          {svgElement}
          <button
            className='cursor-pointer group focus:outline-none'
            onClick={togglePlayPause}
            aria-label={isPaused ? 'Play' : 'Pause'}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2
            }}
          >
            <div
              className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-amber-300'
            >
              {isPaused ? (
                <svg width={40}
                     height={40}
                     viewBox='0 0 32 32'>
                  <path d='M10.968 23V9l12.762 7-12.762 7z' />
                </svg>
              ) : (
                <svg width={35}
                     height={35}
                     viewBox='0 0 32 32'>
                  <path d='M18.432 7.5h4.547v17h-4.547zm-9.41 0h4.545v17H9.022z' />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
