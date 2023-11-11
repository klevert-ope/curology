import throttle from 'lodash.throttle';
import {useLayoutEffect, useRef, useState} from 'react';

export function useScrollThumb(config = {}) {
	const {throttleDelay = 300, hideTimeout = 3000} = config;

	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [showThumb, setShowThumb] = useState(false);
	const hideTimeoutRef = useRef(null);
	const thumbRef = useRef(null);

	const calculateScrollPercentage = () => {
		const {scrollTop} = document.documentElement;
		const content = document.getElementById('smooth-content');
		const maxScrollTop = content.scrollHeight - window.innerHeight;
		const offset = (100 * thumbRef.current.clientHeight) / window.innerHeight;
		const percentage = (scrollTop / maxScrollTop) * (100 - offset);
		return Math.min(percentage, 100);
	};

	const handleScroll = throttle(() => {
		const adjustedPercentage = calculateScrollPercentage();
		setScrollPercentage(adjustedPercentage);

		if (window.scrollY > 0) {
			setShowThumb(true);
			if (hideTimeoutRef.current) {
				clearTimeout(hideTimeoutRef.current);
			}
			hideTimeoutRef.current = setTimeout(() => setShowThumb(false), hideTimeout);
		}
	}, throttleDelay);

	useLayoutEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return {
		scrollPercentage,
		showThumb,
		thumbRef,
	};
}
