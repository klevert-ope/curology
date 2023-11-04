import {useScrollThumb} from '@/hooks/ui/useScrollThumb';

function ScrollThumb() {
    const {scrollPercentage, showThumb} = useScrollThumb();

    const thumbStyle = {
        position: 'fixed',
        right: '4px',
        top: `${scrollPercentage}%`,
        opacity: showThumb ? 1 : 0,
        transition: 'opacity 0.5s',
    };

    return (
        <div style={thumbStyle}>
            <div className='z-50 mt-1 h-16 rounded-lg bg-amber-300 w-1.5'/>
        </div>
    );
}

export default ScrollThumb;
