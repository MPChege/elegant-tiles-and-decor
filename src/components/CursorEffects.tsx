import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [
        ...prev.slice(-8), // Keep last 8 points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
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

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Cursor */}
      <motion.div
        className={`fixed w-6 h-6 border-2 border-primary rounded-full mix-blend-difference transition-all duration-200 ${
          isHovering ? 'scale-150 bg-primary/20' : 'scale-100'
        }`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed w-20 h-20 bg-primary/5 rounded-full blur-xl"
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

      {/* Trail Effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 bg-primary/30 rounded-full"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0,
            x: point.x - 4,
            y: point.y - 4,
          }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.05
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffects;