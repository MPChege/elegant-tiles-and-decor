import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Filter, 
  Search,
  Phone, 
  Mail,
  Briefcase,
  Building2,
  Hotel,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import beforeAfterImage from "@/assets/before-after.jpg";
import { useDebounce } from "@/hooks/useDebounce";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const allCategories = ["All", "Residential", "Commercial", "Hospitality"];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Transformation",
      category: "Residential",
      location: "Karen, Nairobi",
      duration: "8 weeks",
      description: "Complete renovation featuring premium marble tiles, crystal chandeliers, and bespoke furniture.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "Elegant Tiles & Decor transformed our home beyond our wildest dreams. The attention to detail is extraordinary.",
      client: "Sarah & Michael Johnson",
      rating: 5,
      features: ["Premium Marble Flooring", "Crystal Lighting", "Custom Furniture", "Smart Home Integration"],
      investment: "KES 2.5M",
      certifications: ["Kenya Interior Design Award 2023", "LEED Certified Project"]
    },
    {
      id: 2,
      title: "Modern Office Redesign",
      category: "Commercial",
      location: "Westlands, Nairobi",
      duration: "6 weeks",
      description: "Contemporary office space with sustainable materials and ergonomic design principles.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "Professional, timely, and exceeded expectations. Our productivity increased significantly in this beautiful space.",
      client: "TechCorp Solutions",
      rating: 5,
      features: ["Eco-Friendly Materials", "Ergonomic Design", "Smart Lighting", "Collaborative Spaces"],
      investment: "KES 3.8M",
      certifications: ["Kenya Commercial Design Award 2023", "Green Building Certification"]
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Kilifi",
      duration: "12 weeks",
      description: "Elegant coastal-inspired lobby with natural materials and sophisticated lighting design.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "The lobby has become our signature space. Guests are constantly impressed by the elegant design.",
      client: "Coastal Boutique Hotel",
      rating: 5,
      features: ["Natural Stone Features", "Coastal Design", "Ambient Lighting", "Luxury Seating"],
      investment: "KES 5.2M",
      certifications: ["Kenya Hospitality Design Award 2023", "Tourism Excellence Certification"]
    }
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = debouncedSearch === "" || 
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.location.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.features.some(feature => feature.toLowerCase().includes(debouncedSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterRef = useRef(null);

  // Handle click outside filter
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProjectClick = (projectId) => {
    const index = filteredProjects.findIndex(p => p.id === projectId);
    if (index > -1) {
      setCurrentProject(projectId);
    }
  };

  const nextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === currentProject);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    if (nextIndex >= 0) {
      setCurrentProject(filteredProjects[nextIndex].id);
    }
  };

  const prevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === currentProject);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    if (prevIndex >= 0) {
      setCurrentProject(filteredProjects[prevIndex].id);
    }
  };

  const currentProj = projects.find(p => p.id === currentProject) || filteredProjects[0];

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case "Residential": return <Briefcase className="h-4 w-4" />;
      case "Commercial": return <Building2 className="h-4 w-4" />;
      case "Hospitality": return <Hotel className="h-4 w-4" />;
      default: return <Filter className="h-4 w-4" />;
    }
  };

  // Handle mouse down for slider
  const handleSliderMouseDown = (e) => {
    const rect = e.currentTarget.parentElement!.getBoundingClientRect();
    const newPos = ((e.clientX - rect.left) / rect.width) * 100;
    setBeforeAfterSlider(Math.max(0, Math.min(100, newPos)));
    
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
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  {getCategoryIcon(selectedCategory)}
                  <span>{selectedCategory === "All" ? "Filter" : selectedCategory}</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-0" ref={filterRef}>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">Filter Projects</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {allCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCategory(category);
                          setFilterOpen(false);
                          setCurrentFilterIndex(index);
                        }}
                        className={`text-left px-4 py-2 rounded-md ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "hover:bg-muted"
                        }`}
                        aria-label={`Filter projects by ${category} category`}
                      >
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(category)}
                          <span>{category}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
                aria-label="Search projects"
              />
              <Search className="h-4 w-4 absolute left-3 top-2.5 text-muted-foreground" aria-hidden="true" />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Award-Winning Design Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Explore Our
            <span className="block text-primary">Project Portfolio</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed spaces across Kenya with our commitment to affordable elegance, premium quality, and timeless design.
          </p>
        </motion.div>

        {/* Main Project Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
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
                  onMouseDown={handleSliderMouseDown}
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
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    project.id === currentProject 
                      ? "bg-primary scale-125 shadow-glow" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Project ${index + 1}: ${project.title}`}
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
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  {getCategoryIcon(currentProj.category)}
                </div>
                <div className="flex">
                  {[...Array(currentProj.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                {currentProj.certifications && currentProj.certifications.length > 0 && (
                  <div className="mt-2 text-sm text-muted-foreground ml-4">
                    {currentProj.certifications[0]}
                  </div>
                )}
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
                  {[...Array(currentProj.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="font-semibold text-foreground">{currentProj.rating}.0</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Project Features</h4>
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
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                <Mail className="mr-2 h-5 w-5" />
                Request Design Services
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
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

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Project Gallery
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of completed projects to see the quality and variety of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/2] bg-gray-200 rounded-xl overflow-hidden mb-4 shadow-card group-hover:shadow-luxury transition-shadow duration-300">
                  <img
                    src={project.beforeImage}
                    alt={`${project.title} before`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    aria-label={`${project.title} project`}
                  />
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-display font-bold text-foreground">{project.title}</h4>
                  <div className="flex">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;