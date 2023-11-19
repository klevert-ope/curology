import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin (ScrollSmoother, ScrollTrigger);

export function useScrollSmoother () {
  useEffect (() => {
    const initializeScrollSmoother = () => {
      const gsapContext = gsap.context (() => {
        ScrollTrigger.normalizeScroll (true);
        ScrollTrigger.config ({ ignoreMobileResize: true });

        const scrollSmoother = ScrollSmoother.create ({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 2,
          effects: true,
          smoothTouch: 0.2
        });

        return () => scrollSmoother.kill ();
      });

      return () => gsapContext.revert ();
    };

    initializeScrollSmoother ();
  }, []);
}
