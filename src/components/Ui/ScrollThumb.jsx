'use client';
import { useScrollThumb } from '@/src/hooks/Ui/useScrollThumb';

function ScrollThumb () {
  const { scrollPercentage, showThumb, thumbElementRef } = useScrollThumb ();

  const thumbStyle = {
    top: `${scrollPercentage}%`,
    opacity: showThumb ? 1 : 0,
    transition: 'opacity 0.5s'
  };

  return (
    <div style={thumbStyle}
         ref={thumbElementRef}
         className='fixed right-1 my-1 z-50 h-16 rounded-lg bg-amber-300 w-1.5'
    />
  );
}

export default ScrollThumb;
