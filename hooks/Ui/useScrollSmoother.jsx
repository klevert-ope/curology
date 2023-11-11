import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useLayoutEffect} from 'react';

export function useScrollSmoother() {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

		const initializeScrollSmoother = () => {
			const gsapContext = gsap.context(() => {
				ScrollTrigger.normalizeScroll(true);
				ScrollTrigger.config({ignoreMobileResize: true});

				const scrollSmoother = ScrollSmoother.create({
					wrapper: '#smooth-wrapper',
					content: '#smooth-content',
					smooth: 4,
					effects: true,
					smoothTouch: 0.2,
					ignoreMobileResize: true,
				});

				return () => {
					scrollSmoother.kill();
				};
			});

			return () => gsapContext.revert();
		};

		initializeScrollSmoother();
	}, []);
}
