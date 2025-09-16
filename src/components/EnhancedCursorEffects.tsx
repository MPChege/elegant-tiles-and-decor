import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EnhancedCursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .hover-glow, .hover-scale')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Cursor Circle */}
      <motion.div
        className={`fixed w-8 h-8 border-2 border-primary rounded-full transition-all duration-200 ${
          isHovering ? 'scale-150 bg-primary/20 border-primary-light' : 'scale-100'
        }`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200
        }}
      />
    </div>
  );
};

export default EnhancedCursorEffects;