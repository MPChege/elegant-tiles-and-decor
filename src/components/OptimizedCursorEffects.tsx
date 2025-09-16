import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const OptimizedCursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const updateMousePosition = (e: MouseEvent) => {
        // Cancel previous animation frame
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        
        // Use RAF for smooth updates
        rafRef.current = requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        });
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.matches('button, a, [role="button"], .hover-glow, .hover-scale')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      // Use passive listeners for better performance
      window.addEventListener('mousemove', updateMousePosition, { passive: true });
      window.addEventListener('mouseover', handleMouseOver, { passive: true });

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('resize', checkMobile);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Cursor */}
      <motion.div
        className={`fixed w-6 h-6 border-2 border-primary rounded-full mix-blend-difference transition-all duration-150 ${
          isHovering ? 'scale-150 bg-primary/20' : 'scale-100'
        }`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.5
        }}
      />

      {/* Optimized Glow Effect */}
      <motion.div
        className="fixed w-16 h-16 bg-primary/3 rounded-full blur-lg"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 250,
          mass: 0.8
        }}
      />
    </div>
  );
};

export default OptimizedCursorEffects;