import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, ArrowRight, Sparkles, Zap, Star, Diamond, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import hero images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroInterior from "@/assets/hero-interior.jpg";

const EnhancedHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  const heroSlides = [
    {
      title: "Transforming Spaces",
      subtitle: "Defining Elegance",
      typewriterText: "Affordable • Premium • Sophisticated",
      description: "Experience affordable elegance with our curated collection of premium tiles, lighting, and decor. Transform your space into a masterpiece without breaking the bank.",
      cta: "Explore Collection",
      secondaryCta: "View Gallery",
      accent: "✨ Affordable Elegance",
      image: heroSlide1
    },
    {
      title: "Premium Tiles",
      subtitle: "Exceptional Design",
      typewriterText: "Ceramic • Marble • Mosaic • Stone",
      description: "Discover our stunning range of tiles that combine luxury aesthetics with affordability. From modern minimalism to classic elegance.",
      cta: "Shop Tiles",
      secondaryCta: "See Catalog",
      accent: "🏆 Quality Collection",
      image: heroSlide2
    },
    {
      title: "Complete Decor",
      subtitle: "Your Vision Realized",
      typewriterText: "Lighting • Furniture • Walls • Floors",
      description: "From concept to completion, we bring your dream space to life with our comprehensive design services and premium materials.",
      cta: "Start Design",
      secondaryCta: "Book Consultation",
      accent: "💎 Full Service Design",
      image: heroSlide3
    },
    {
      title: "Interior Excellence",
      subtitle: "Modern Living",
      typewriterText: "Doors • Sinks • Showers • Bathrooms",
      description: "Complete your home transformation with our premium fixtures, doors, and bathroom solutions. Quality that lasts a lifetime.",
      cta: "Browse Products",
      secondaryCta: "Get Quote",
      accent: "🏠 Complete Solutions",
      image: heroInterior
    }
  ];

  const backgroundImages = [heroSlide1, heroSlide2, heroSlide3, heroInterior];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTypewriterVisible(false);
      setTimeout(() => setIsTypewriterVisible(true), 500);
    }, 5000);

    // Background switching with zoom effect
    const bgInterval = setInterval(() => {
      setIsZooming(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        setIsZooming(false);
      }, 800);
    }, 6000);
    
    setIsTypewriterVisible(true);
    return () => {
      clearInterval(slideInterval);
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentContent = heroSlides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsTypewriterVisible(false);
    setTimeout(() => setIsTypewriterVisible(true), 100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsTypewriterVisible(false);
    setTimeout(() => setIsTypewriterVisible(true), 100);
  };

  const ParticleElement = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
    <div 
      className={`absolute ${size} ${color} rounded-full animate-particle opacity-70`}
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  const FloatingCard = ({ delay, icon: Icon, title, position }: { 
    delay: number; 
    icon: any; 
    title: string; 
    position: string;
  }) => (
    <div 
      className={`absolute ${position} w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl 
                 border border-white/20 flex flex-col items-center justify-center
                 hover:bg-white/20 transition-all duration-500 cursor-pointer
                 animate-float hover:scale-110 group`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-6 w-6 text-white mb-1 group-hover:text-primary-light transition-colors" />
      <span className="text-xs text-white/80 group-hover:text-white">{title}</span>
    </div>
  );

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background with Auto-switching and Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            className="w-full h-full"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ 
              opacity: 1, 
              scale: isZooming ? 1.3 : 1.1,
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              scale: { duration: isZooming ? 0.8 : 2 }
            }}
          >
            <img 
              src={backgroundImages[currentBg]}
              alt="Elegant Interior Design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-primary/50"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      </div>

      {/* Left Side Sliding Images Preview */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {heroSlides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setCurrentBg(index);
              setIsTypewriterVisible(false);
              setTimeout(() => setIsTypewriterVisible(true), 100);
            }}
            className={`relative w-32 h-40 rounded-xl overflow-hidden border-2 transition-all duration-500 ${
              index === currentSlide
                ? "border-primary scale-110 shadow-glow"
                : "border-white/30 hover:border-white/60 hover:scale-105"
            }`}
            whileHover={{ scale: index === currentSlide ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-primary/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:text-primary-light" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-44 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:text-primary-light" />
      </button>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <ParticleElement 
            key={i}
            delay={i * 0.4}
            size={i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1 h-1" : "w-3 h-3"}
            color={i % 2 === 0 ? "bg-primary/40" : "bg-white/30"}
          />
        ))}
      </div>

      {/* Morphing Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 animate-morphing blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 animate-morphing blur-2xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/30 animate-morphing blur-lg" style={{ animationDelay: '4s' }}></div>

      {/* Floating Interactive Cards */}
      <FloatingCard delay={0} icon={Diamond} title="Premium" position="top-20 left-20 hidden xl:flex" />
      <FloatingCard delay={1} icon={Star} title="Quality" position="top-40 left-32 hidden xl:flex" />
      <FloatingCard delay={2} icon={Sparkles} title="Luxury" position="bottom-40 left-32 hidden xl:flex" />
      <FloatingCard delay={3} icon={Zap} title="Modern" position="bottom-20 left-20 hidden xl:flex" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading with Stagger Animation */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
                  {currentContent.title}
                </h1>
                <span className="block text-5xl md:text-7xl font-display font-bold text-primary-light mt-2 animate-slide-up animate-pulse3d" style={{ animationDelay: '0.2s' }}>
                  {currentContent.subtitle}
                </span>
              </div>

              {/* Typewriter Effect */}
              <div className="mb-8 h-12 flex items-center justify-center">
                {isTypewriterVisible && (
                  <div className="relative">
                    <span className="text-2xl md:text-3xl font-medium text-primary-light animate-typewriter border-r-2 border-primary animate-blink whitespace-nowrap overflow-hidden">
                      {currentContent.typewriterText}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="relative mb-12">
                <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {currentContent.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
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
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Slide Indicators */}
          <div className="flex justify-center space-x-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setCurrentBg(index);
                  setIsTypewriterVisible(false);
                  setTimeout(() => setIsTypewriterVisible(true), 100);
                }}
                className={`group relative transition-all duration-500 ${
                  index === currentSlide 
                    ? "scale-125" 
                    : "hover:scale-110"
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary shadow-glow" 
                    : "bg-white/30 group-hover:bg-white/60"
                }`}></div>
                {index === currentSlide && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-40"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="group cursor-pointer">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full p-1 group-hover:border-white/80 transition-colors">
            <div className="w-2 h-4 bg-gradient-to-b from-white to-primary rounded-full mx-auto animate-bounce"></div>
          </div>
          <p className="text-white/60 text-xs mt-2 group-hover:text-white/80 transition-colors">Scroll</p>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse3d opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse3d opacity-30" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default EnhancedHeroSlider;