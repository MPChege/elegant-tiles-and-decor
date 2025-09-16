import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import elegantLogo from "@/assets/elegant-logo.jpg";

interface EnhancedLoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const EnhancedLoadingScreen = ({ isLoading, onComplete }: EnhancedLoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing luxury experience...");

  const loadingTexts = [
    "Initializing luxury experience...",
    "Curating premium collections...",
    "Setting up elegant displays...",
    "Preparing your design journey...",
    "Loading affordable elegance...",
    "Almost ready to transform..."
  ];

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-dark to-black flex items-center justify-center"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Morphing Background Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-primary-light/20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <div className="text-center z-20 relative">
            {/* Elegant Logo Animation */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative">
                {/* Logo with glow effect */}
                <div className="w-24 h-auto mx-auto mb-6 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary blur-xl opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative">
                    <img
                      src={elegantLogo}
                      alt="Elegant Tiles & Decor"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Brand Text with staggered animation */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                    Elegant Tiles & Decor
                  </h1>
                  <motion.p 
                    className="text-primary-light text-lg font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    Affordable Elegance
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Progress Section */}
            <div className="w-96 mx-auto">
              {/* Loading Text */}
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-between items-center mb-4"
              >
                <span className="text-white/90 text-sm font-medium">{currentText}</span>
                <span className="text-primary-light text-sm font-bold">{Math.round(progress)}%</span>
              </motion.div>
              
              {/* Progress Bar Container */}
              <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Progress fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-50, 150] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-light/40 rounded-full"
                  style={{
                    left: `${30 + i * 8}%`,
                    top: `${40 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [-15, 15],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedLoadingScreen;