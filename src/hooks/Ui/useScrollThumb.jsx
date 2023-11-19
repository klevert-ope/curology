import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollThumb (config = {}) {
  const { hideTimeout = 3000 } = config;

  const [scrollPercentage, setScrollPercentage] = useState (0);
  const [showThumb, setShowThumb] = useState (false);
  const thumbElementRef = useRef (null);
  const hideTimeoutRef = useRef (null);

  const calculateScrollPercentage = useCallback (() => {
    const { scrollTop } = document.documentElement;
    const content = document.getElementById ('smooth-content');

    if (! content || ! window.innerHeight) {
      return 0;
    }

    const maxScrollTop = content.scrollHeight - window.innerHeight;
    const offset =
      maxScrollTop !== 0 ? (100 * thumbElementRef.current.clientHeight) / window.innerHeight : 0;
    const percentage = (scrollTop / maxScrollTop) * (100 - offset);

    return Math.min (percentage, 100);
  }, []);

  useEffect (() => {
    const updateThumbPosition = () => {
      const percentage = calculateScrollPercentage ();
      setScrollPercentage (percentage);

      if (hideTimeoutRef.current) {
        clearTimeout (hideTimeoutRef.current);
      }

      setShowThumb (true);

      hideTimeoutRef.current = setTimeout (() => {
        setShowThumb (false);
      }, hideTimeout);
    };

    const handleScroll = () => {
      requestAnimationFrame (updateThumbPosition);
    };

    window.addEventListener ('scroll', handleScroll);

    return () => {
      clearTimeout (hideTimeoutRef.current);
      window.removeEventListener ('scroll', handleScroll);
    };
  }, [hideTimeout, calculateScrollPercentage]);

  useEffect (() => {
    if (showThumb) {
      const translateY = `-calc(${scrollPercentage}% - ${thumbElementRef.current?.clientHeight}px)`;
      thumbElementRef.current.style.transform = `translateY(${translateY})`;
    }
  }, [scrollPercentage, showThumb]);

  return {
    scrollPercentage,
    showThumb,
    thumbElementRef
  };
}
