import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return { ref, y, opacity, scale };
};

export const ParallaxSection = ({ children, speed = 0.5, className = "" }: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInOnScroll = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        y, 
        scale,
        transition: `all 0.6s ease-out ${delay}s`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInFromLeft = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        x, 
        opacity,
        transition: `all 0.8s ease-out ${delay}s`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInFromRight = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        x, 
        opacity,
        transition: `all 0.8s ease-out ${delay}s`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnScroll = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        scale, 
        opacity,
        transition: `all 0.6s ease-out ${delay}s`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};