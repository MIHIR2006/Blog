
'use client'

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate how far the user has scrolled through the content
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrolled);
      
      // Update CSS variable for the animation
      document.documentElement.style.setProperty('--scroll-width', `${scrolled}%`);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out" 
      style={{ width: `${scrollPercentage}%` }} 
    />
  );
}
