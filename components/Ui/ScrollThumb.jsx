import {useScrollThumb} from '@/hooks/Ui/useScrollThumb';
import {useMemo} from 'react';

function ScrollThumb() {
	const {scrollPercentage, showThumb, thumbRef} = useScrollThumb();

	return useMemo(() => {
		const thumbStyle = {
			position: 'fixed',
			right: '4px',
			top: `${scrollPercentage}%`,
			opacity: showThumb ? 1 : 0,
			transition: 'opacity 0.5s',
		};

		return (
			<div style={thumbStyle} ref={thumbRef}>
				<div className='z-50 my-1 h-16 rounded-lg bg-amber-300 w-1.5'/>
			</div>
		);
	}, [scrollPercentage, showThumb, thumbRef]);
}

export default ScrollThumb;
