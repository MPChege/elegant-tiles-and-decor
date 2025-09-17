import React from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
  className?: string;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  mobile,
  tablet,
  desktop,
  className = "",
}) => {
  const isMobile = useIsMobile();
  
  // Determine which content to render based on device
  let content = children;
  
  if (isMobile && mobile) {
    content = mobile;
  } else if (!isMobile && desktop) {
    content = desktop;
  }
  
  return (
    <div className={className}>
      {content}
    </div>
  );
};

export default ResponsiveWrapper;