import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import elegantLogo from "@/assets/elegant-logo.jpg";

interface ModernLoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const ModernLoadingScreen = ({ isLoading, onComplete }: ModernLoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Preparing your elegant experience");
  const [logoVisible, setLogoVisible] = useState(false);

  const loadingTexts = [
    "Preparing your elegant experience",
    "Curating premium collections",
    "Arranging stunning displays",
    "Finalizing beautiful layouts"
  ];

  useEffect(() => {
    if (!isLoading) return;

    // Logo animation delay
    const logoTimer = setTimeout(() => setLogoVisible(true), 300);

    // Progress simulation
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    // Text cycling
    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 1200);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-dark to-black flex items-center justify-center"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                   backgroundSize: '40px 40px'
                 }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-light/30 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center z-10 max-w-md mx-auto px-6">
            
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={logoVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              {/* Elegant Logo with Glow Effect */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary blur-xl opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={elegantLogo}
                    alt="Elegant Tiles & Decor"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Brand Text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={logoVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-4xl font-display font-bold text-white mb-2">
                  Elegant Tiles & Decor
                </h1>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <div className="w-8 h-px bg-primary-light" />
                  <span className="text-primary-light text-sm font-medium tracking-[0.2em]">
                    AFFORDABLE ELEGANCE
                  </span>
                  <div className="w-8 h-px bg-primary-light" />
                </div>
                <p className="text-white/60 text-sm tracking-wide">
                  Premium Design Solutions
                </p>
              </motion.div>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={logoVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Loading Text */}
              <div className="h-6 flex items-center justify-center">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-white/80 text-base tracking-wide"
                >
                  {currentText}
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-80 mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/50 text-sm tracking-wide">Loading</span>
                  <span className="text-primary-light text-sm font-medium tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
                
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-light to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-80, 320] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Subtle Loading Dots */}
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary-light/50 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-light/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary-light/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary-light/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary-light/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernLoadingScreen;