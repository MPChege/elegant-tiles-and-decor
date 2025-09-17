// Responsive utility functions for device compatibility

export const isMobile = () => {
  return window.innerWidth <= 768;
};

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
  return window.innerWidth > 1024;
};

export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

export const addResponsiveClass = (element: HTMLElement, className: string) => {
  if (element) {
    element.classList.add(className);
  }
};

export const removeResponsiveClass = (element: HTMLElement, className: string) => {
  if (element) {
    element.classList.remove(className);
  }
};

// Function to handle responsive image loading
export const loadResponsiveImage = (imageElement: HTMLImageElement, srcSet: { [key: string]: string }) => {
  const deviceType = getDeviceType();
  
  if (srcSet[deviceType]) {
    imageElement.src = srcSet[deviceType];
  } else if (srcSet.default) {
    imageElement.src = srcSet.default;
  }
};

// Function to adjust font size based on screen size
export const adjustFontSize = (element: HTMLElement, baseSize: number) => {
  const deviceType = getDeviceType();
  let fontSize = baseSize;
  
  if (deviceType === 'mobile') {
    fontSize = baseSize * 0.8;
  } else if (deviceType === 'tablet') {
    fontSize = baseSize * 0.9;
  }
  
  if (element) {
    element.style.fontSize = `${fontSize}px`;
  }
};

// Function to handle responsive layout adjustments
export const adjustLayoutForDevice = () => {
  const deviceType = getDeviceType();
  const body = document.body;
  
  // Remove all device classes
  body.classList.remove('mobile', 'tablet', 'desktop');
  
  // Add current device class
  body.classList.add(deviceType);
  
  // Adjust for mobile
  if (deviceType === 'mobile') {
    // Add mobile-specific adjustments
    document.documentElement.style.fontSize = '14px';
  } else if (deviceType === 'tablet') {
    // Add tablet-specific adjustments
    document.documentElement.style.fontSize = '16px';
  } else {
    // Add desktop-specific adjustments
    document.documentElement.style.fontSize = '16px';
  }
};

// Initialize responsive adjustments
export const initResponsiveDesign = () => {
  // Run on initial load
  adjustLayoutForDevice();
  
  // Run on window resize
  window.addEventListener('resize', adjustLayoutForDevice);
  
  // Run on orientation change
  window.addEventListener('orientationchange', adjustLayoutForDevice);
};