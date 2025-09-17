import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/assets/imageAssets";

const EdwardMartinHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  
  const heroSlides = [
    {
      title: "Transform Your Space",
      subtitle: "With Premium Tiles & Decor",
      description: "Discover our curated collection of luxury tiles, lighting, and interior decor. From modern minimalism to classic elegance, we bring affordable luxury to your doorstep.",
      cta: "Shop Collection",
      secondaryCta: "View Catalog",
      image: heroImages.slide1,
      background: heroImages.slide1
    },
    {
      title: "Elegant Tile Solutions",
      subtitle: "Ceramic • Marble • Stone",
      description: "Premium quality tiles that combine stunning aesthetics with durability. Perfect for kitchens, bathrooms, and accent walls that make a statement.",
      cta: "Browse Tiles",
      secondaryCta: "Design Services",
      image: heroImages.slide2,
      background: heroImages.slide2
    },
    {
      title: "Complete Interior Design",
      subtitle: "End-to-End Solutions",
      description: "From initial concept to final installation, we provide comprehensive interior design services that transform your vision into reality.",
      cta: "Start Project",
      secondaryCta: "View Portfolio",
      image: heroImages.slide3,
      background: heroImages.slide3
    },
    {
      title: "Luxury Made Affordable",
      subtitle: "Quality You Can Trust",
      description: "Experience the perfect blend of luxury and affordability with our carefully selected materials and expert craftsmanship.",
      cta: "Explore More",
      secondaryCta: "Contact Us",
      image: heroImages.slide4,
      background: heroImages.slide4
    },
    {
      title: "Sophisticated Lighting",
      subtitle: "Illuminate Your Dreams",
      description: "Create the perfect ambiance with our exclusive collection of designer lighting. From crystal chandeliers to modern pendant lights.",
      cta: "Browse Lighting",
      secondaryCta: "Get Quote",
      image: heroImages.slide5,
      background: heroImages.slide5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoplay, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const currentContent = heroSlides[currentSlide];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Dynamic Background with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${currentContent.background})` }}
            />
            {/* Sophisticated overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          
          {/* Left Content - Edward Martin Style */}
          <div className="lg:col-span-7 xl:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                {/* Trend Badge - Like Edward Martin */}
                <motion.div 
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium tracking-wide">
                    TRENDING NOW
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {currentContent.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  className="text-xl md:text-2xl text-pink-400 font-light mb-8 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {currentContent.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {currentContent.description}
                </motion.p>

                {/* CTA Buttons - Edward Martin Style */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Button 
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-medium rounded-none border-0 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    {currentContent.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-none transition-all duration-300 shadow-lg hover:shadow-2xl bg-white/20 backdrop-blur-sm"
                    aria-label={currentContent.secondaryCta}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {currentContent.secondaryCta}
                  </Button>
                </motion.div>

                {/* Slide Indicators */}
                <motion.div 
                  className="flex gap-3 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      title={`Go to slide ${index + 1}`}
                      className={`h-1 transition-all duration-300 ${
                        index === currentSlide 
                          ? "w-12 bg-pink-400" 
                          : "w-6 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Large Image Carousel */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="relative h-[600px] lg:h-[700px] xl:h-[800px]">
              
              {/* Main Large Image */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`main-image-${currentSlide}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <img
                      src={currentContent.image}
                      alt={currentContent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                title="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                title="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Progress Bar */}
              {isAutoplay && (
                <div className="absolute top-4 left-4 right-4 h-1 bg-white/20 overflow-hidden z-10">
                  <motion.div
                    className="h-full bg-pink-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={currentSlide}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-white/50 text-xs mt-2 tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default EdwardMartinHero;