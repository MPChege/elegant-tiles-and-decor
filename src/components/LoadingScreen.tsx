import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Preparing your experience...");

  const loadingTexts = [
    "Preparing your experience...",
    "Arranging premium tiles...",
    "Setting up luxury displays...",
    "Almost ready..."
  ];

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [isLoading, onComplete]);

  const tileVariants = {
    hidden: { scale: 0, rotate: 45, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    })
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-dark to-black flex items-center justify-center"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border border-white/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="text-center z-10">
            {/* Logo Formation Animation */}
            <div className="mb-12">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Elegant logo like footer */}
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl font-display font-bold text-white text-center"
                  >
                    Elegant
                    <br />
                    <span className="text-primary-light">Tiles</span>
                  </motion.div>
                </div>

                {/* Brand Text */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <h1 className="text-4xl font-display font-bold text-white mb-2">
                    Elegant Tiles & Decor
                  </h1>
                  <p className="text-primary-light text-lg font-medium">
                    Affordable Elegance
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="w-80 mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80 text-sm">{currentText}</span>
                <span className="text-white text-sm font-medium">{progress}%</span>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-light to-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary-light/30 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-20, 20],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
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

export default LoadingScreen;