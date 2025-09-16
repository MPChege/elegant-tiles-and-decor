import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  const features = [
    { icon: Star, text: "Premium Quality", desc: "Award-winning designs" },
    { icon: Sparkles, text: "Affordable Prices", desc: "Luxury within reach" },
    { icon: ArrowRight, text: "Expert Installation", desc: "Professional service" }
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary/20 to-black/80 z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary-dark/50" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Transforming Spaces Since 2010</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Elegant Tiles
            <span className="block bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              & Decor
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light mb-4 text-white/90"
          >
            Affordable Elegance
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed"
          >
            Transform your space with premium tiles, luxury finishes, and expert interior design. 
            Where quality meets affordability in every project.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-full shadow-luxury">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Work
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{feature.text}</div>
                  <div className="text-xs text-white/70">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHero;