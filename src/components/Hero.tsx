import { useState, useEffect, useRef } from "react";
import { ChevronRight, Play, ArrowRight, Sparkles, Zap, Star, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  const heroSlides = [
    {
      title: "Transforming Spaces",
      subtitle: "Defining Elegance",
      typewriterText: "Affordable • Premium • Sophisticated",
      description: "Experience affordable elegance with our curated collection of premium tiles, lighting, and decor. Transform your space into a masterpiece without breaking the bank.",
      cta: "Explore Collection",
      secondaryCta: "View Gallery",
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
    icon: React.ElementType; 
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
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        >
          <img 
            src={heroImage}
            alt="Elegant Interior Design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-primary/40"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-60"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {[...Array(12)].map((_, i) => (
          <ParticleElement 
            key={i}
            delay={i * 0.5}
            size={i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1 h-1" : "w-3 h-3"}
            color={i % 2 === 0 ? "bg-primary/40" : "bg-white/30"}
          />
        ))}
      </div>

      {/* Morphing Background Elements - Hidden on mobile */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 animate-morphing blur-xl hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 animate-morphing blur-2xl hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/30 animate-morphing blur-lg hidden md:block" style={{ animationDelay: '4s' }}></div>

      {/* Floating Interactive Cards - Hidden on mobile */}
      <div className="hidden lg:block">
        <FloatingCard delay={0} icon={Diamond} title="Premium" position="top-20 left-20" />
        <FloatingCard delay={1} icon={Star} title="Quality" position="top-40 right-32" />
        <FloatingCard delay={2} icon={Sparkles} title="Luxury" position="bottom-40 left-32" />
        <FloatingCard delay={3} icon={Zap} title="Modern" position="bottom-20 right-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 md:mb-8 animate-fade-in hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <span className="w-3 h-3 bg-primary rounded-full animate-glow"></span>
            <span className="text-white text-sm font-medium group-hover:text-primary-light transition-colors">
              {currentContent.accent}
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
          </div>

          {/* Main Heading with Stagger Animation */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
              {currentContent.title}
            </h1>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-light mt-2 animate-slide-up animate-pulse3d" style={{ animationDelay: '0.2s' }}>
              {currentContent.subtitle}
            </span>
          </div>

          {/* Typewriter Effect */}
          <div className="mb-6 md:mb-8 h-10 md:h-12 flex items-center justify-center">
            {isTypewriterVisible && (
              <div className="relative">
                <span className="text-lg md:text-2xl lg:text-3xl font-medium text-primary-light animate-typewriter border-r-2 border-primary animate-blink whitespace-nowrap overflow-hidden">
                  {currentContent.typewriterText}
                </span>
              </div>
            )}
          </div>

          {/* Description with Shimmer Effect */}
          <div className="relative mb-8 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {currentContent.description}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity hidden md:block"></div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-hero group relative overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                {currentContent.cta}
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button className="btn-elegant group relative overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {currentContent.secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
            </Button>
          </div>

          {/* Interactive Slide Indicators */}
          <div className="flex justify-center space-x-3 md:space-x-4">
            {heroSlides.map((_, index) => (
              <button
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
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary shadow-glow" 
                    : "bg-white/30 group-hover:bg-white/60"
                }`}></div>
                {index === currentSlide && (
                  <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary animate-ping opacity-40"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="group cursor-pointer">
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/50 rounded-full p-1 group-hover:border-white/80 transition-colors">
            <div className="w-1.5 h-3 md:w-2 md:h-4 bg-gradient-to-b from-white to-primary rounded-full mx-auto animate-bounce"></div>
          </div>
          <p className="text-white/60 text-xs mt-2 group-hover:text-white/80 transition-colors">Scroll</p>
        </div>
      </div>

      {/* Ambient Glow Effects - Reduced on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse3d opacity-30 md:opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-white/5 rounded-full blur-3xl animate-pulse3d opacity-20 md:opacity-30" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;