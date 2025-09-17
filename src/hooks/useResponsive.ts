import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
      
      if (width <= 768) {
        setDeviceType('mobile');
      } else if (width <= 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    deviceType
  };
};