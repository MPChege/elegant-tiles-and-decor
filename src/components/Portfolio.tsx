import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfterImage from "@/assets/before-after.jpg";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Transformation",
      category: "Residential",
      location: "Karen, Nairobi",
      duration: "8 weeks",
      description: "Complete renovation featuring premium marble tiles, crystal chandeliers, and bespoke furniture.",
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400",
      testimonial: "Elegant Tiles & Decor transformed our home beyond our wildest dreams. The attention to detail is extraordinary.",
      client: "Sarah & Michael Johnson",
      rating: 5,
      features: ["Premium Marble Flooring", "Crystal Lighting", "Custom Furniture", "Smart Home Integration"],
      investment: "KES 2.5M"
    },
    {
      id: 2,
      title: "Modern Office Redesign",
      category: "Commercial",
      location: "Westlands, Nairobi",
      duration: "6 weeks",
      description: "Contemporary office space with sustainable materials and ergonomic design principles.",
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400",
      testimonial: "Professional, timely, and exceeded expectations. Our productivity increased significantly in this beautiful space.",
      client: "TechCorp Solutions",
      rating: 5,
      features: ["Eco-Friendly Materials", "Ergonomic Design", "Smart Lighting", "Collaborative Spaces"],
      investment: "KES 3.8M"
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Kilifi",
      duration: "12 weeks",
      description: "Elegant coastal-inspired lobby with natural materials and sophisticated lighting design.",
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400",
      testimonial: "The lobby has become our signature space. Guests are constantly impressed by the elegant design.",
      client: "Coastal Boutique Hotel",
      rating: 5,
      features: ["Natural Stone Features", "Coastal Design", "Ambient Lighting", "Luxury Seating"],
      investment: "KES 5.2M"
    }
  ];

  const currentProj = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-secondary/20 to-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Award-Winning Projects</span>
          </div>
          
          <h2 className="text-elegant mb-6">
            Portfolio of
            <span className="block text-primary mt-2">Elegant Transformations</span>
          </h2>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Discover how we've transformed ordinary spaces into extraordinary experiences. 
            Each project showcases our commitment to affordable elegance and premium quality.
          </p>
        </motion.div>

        {/* Main Project Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Before/After Slider */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury relative group">
              {/* Before Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ 
                  backgroundImage: `url(${currentProj.beforeImage})`,
                  clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)`
                }}
              />
              
              {/* After Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ 
                  backgroundImage: `url(${currentProj.afterImage})`,
                  clipPath: `inset(0 0 0 ${beforeAfterSlider}%)`
                }}
              />

              {/* Slider Control */}
              <div className="absolute inset-0">
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10 flex items-center justify-center"
                  style={{ left: `${beforeAfterSlider}%`, transform: 'translateX(-50%)' }}
                  onMouseDown={(e) => {
                    const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                    const handleMouseMove = (e: MouseEvent) => {
                      const newPos = ((e.clientX - rect.left) / rect.width) * 100;
                      setBeforeAfterSlider(Math.max(0, Math.min(100, newPos)));
                    };
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 border-l-2 border-r-2 border-primary"></div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? "bg-primary scale-125 shadow-glow" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Project Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {currentProj.category}
                </span>
                <div className="flex">
                  {[...Array(currentProj.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                {currentProj.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentProj.description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-foreground">{currentProj.location}</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">{currentProj.duration}</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Investment</p>
                <p className="font-semibold text-primary">{currentProj.investment}</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-foreground">{currentProj.rating}.0</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentProj.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20">
              <Quote className="h-6 w-6 text-primary mb-3" />
              <p className="text-foreground italic mb-4 leading-relaxed">
                "{currentProj.testimonial}"
              </p>
              <p className="text-sm font-semibold text-primary">
                - {currentProj.client}
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Button className="btn-luxury flex-1">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View More Projects
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "5.0", label: "Average Rating" },
            { number: "50+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
            >
              <div className="text-3xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;