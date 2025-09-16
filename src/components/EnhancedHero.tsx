import { useState, useEffect, useRef } from "react";
import { ChevronRight, Play, ArrowRight, Sparkles, Zap, Star, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";
import materialsShowcase from "@/assets/materials-showcase.jpg";

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  
  const heroSlides = [
    {
      title: "Transforming Spaces",
      subtitle: "Defining Elegance",
      typewriterText: "Affordable • Premium • Sophisticated",
      description: "Experience affordable elegance with our curated collection of premium tiles, lighting, and decor. Transform your space into a masterpiece without breaking the bank.",
      cta: "Explore Collection",
      secondaryCta: "View Portfolio",
      accent: "✨ Affordable Elegance"
    },
    {
      title: "Premium Tiles",
      subtitle: "Exceptional Design",
      typewriterText: "Ceramic • Marble • Mosaic • Stone",
      description: "Discover our stunning range of tiles that combine luxury aesthetics with affordability. From modern minimalism to classic elegance.",
      cta: "Shop Tiles",
      secondaryCta: "See Catalog",
      accent: "🏆 Quality Collection"
    },
    {
      title: "Complete Decor",
      subtitle: "Your Vision Realized",
      typewriterText: "Lighting • Furniture • Walls • Floors",
      description: "From concept to completion, we bring your dream space to life with our comprehensive design services and premium materials.",
      cta: "Start Design",
      secondaryCta: "Book Consultation",
      accent: "💎 Full Service Design"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTypewriterVisible(false);
      setTimeout(() => setIsTypewriterVisible(true), 500);
    }, 8000);
    
    setIsTypewriterVisible(true);
    return () => clearInterval(timer);
  }, []);

  const currentContent = heroSlides[currentSlide];

  const ParticleElement = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
    <motion.div 
      className={`absolute ${size} ${color} rounded-full opacity-70`}
      style={{ 
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
      animate={{
        y: [-20, -100],
        x: [0, 30],
        scale: [0, 1, 0],
        opacity: [0, 0.7, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );

  const FloatingCard = ({ delay, icon: Icon, title, position }: { 
    delay: number; 
    icon: any; 
    title: string; 
    position: string;
  }) => (
    <motion.div 
      className={`absolute ${position} w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl 
                 border border-white/20 flex flex-col items-center justify-center
                 hover:bg-white/20 transition-all duration-500 cursor-pointer
                 group`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <Icon className="h-6 w-6 text-white mb-1 group-hover:text-primary-light transition-colors" />
      <span className="text-xs text-white/80 group-hover:text-white">{title}</span>
    </motion.div>
  );

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="w-full h-full">
          <img 
            src={heroImage}
            alt="Elegant Interior Design"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/50"></div>
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <ParticleElement 
            key={i}
            delay={i * 0.5}
            size={i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1 h-1" : "w-3 h-3"}
            color={i % 2 === 0 ? "bg-primary/40" : "bg-white/30"}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            {/* Animated Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-3 h-3 bg-primary rounded-full animate-glow"></span>
              <span className="text-white text-sm font-medium group-hover:text-primary-light transition-colors">
                {currentContent.accent}
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </motion.div>

            {/* Main Heading with Stagger Animation */}
            <motion.div className="mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {currentContent.title}
              </motion.h1>
              <motion.span 
                className="block text-4xl md:text-6xl font-display font-bold text-primary-light mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {currentContent.subtitle}
              </motion.span>
            </motion.div>

            {/* Typewriter Effect */}
            <div className="mb-8 h-12 flex items-center">
              {isTypewriterVisible && (
                <motion.div 
                  className="relative"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  <span className="text-xl md:text-2xl font-medium text-primary-light whitespace-nowrap overflow-hidden border-r-2 border-primary animate-blink">
                    {currentContent.typewriterText}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {currentContent.description}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button className="btn-hero group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  {currentContent.cta}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button className="btn-elegant group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {currentContent.secondaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
              </Button>
            </motion.div>

            {/* Interactive Slide Indicators */}
            <div className="flex space-x-4">
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsTypewriterVisible(false);
                    setTimeout(() => setIsTypewriterVisible(true), 100);
                  }}
                  className={`group relative transition-all duration-500 ${
                    index === currentSlide 
                      ? "scale-125" 
                      : "hover:scale-110"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-primary shadow-glow" 
                      : "bg-white/30 group-hover:bg-white/60"
                  }`}></div>
                  {index === currentSlide && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-40"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div 
                className="w-96 h-96 rounded-3xl overflow-hidden shadow-luxury border-4 border-white/20"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={materialsShowcase}
                  alt="Premium Tile Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center"
                animate={{ y: [-10, 10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <Diamond className="h-6 w-6 text-primary-light" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Interactive Cards */}
      <FloatingCard delay={0} icon={Diamond} title="Premium" position="top-20 left-20 hidden xl:flex" />
      <FloatingCard delay={1} icon={Star} title="Quality" position="top-40 right-32 hidden xl:flex" />
      <FloatingCard delay={2} icon={Sparkles} title="Luxury" position="bottom-40 left-32 hidden xl:flex" />
      <FloatingCard delay={3} icon={Zap} title="Modern" position="bottom-20 right-20 hidden xl:flex" />

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse3d opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse3d opacity-30" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default EnhancedHero;