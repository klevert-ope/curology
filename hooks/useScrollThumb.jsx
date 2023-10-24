import { useState, useLayoutEffect, useRef } from "react";

const useScrollThumb = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showThumb, setShowThumb] = useState(false);
  const hideTimeoutRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const content = document.getElementById("smooth-content");
    const maxScrollTop = content.scrollHeight - window.innerHeight;
    const thumbHeight = 9;
    const percentage = (scrollTop / maxScrollTop) * (100 - thumbHeight);
    const adjustedPercentage = Math.min(percentage, 100);

    setScrollPercentage(adjustedPercentage);

    if (scrollTop > 0) {
      setShowThumb(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = setTimeout(() => setShowThumb(false), 3000);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPercentage, showThumb };
};

export default useScrollThumb;
