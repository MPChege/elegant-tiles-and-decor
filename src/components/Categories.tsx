import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Layers, 
  Lightbulb, 
  Home, 
  Palette, 
  Hammer, 
  TreePine,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import materialsImage from "@/assets/materials-showcase.jpg";

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [rotatingProducts, setRotatingProducts] = useState<number[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const categories = [
    {
      icon: Layers,
      title: "Premium Tiles",
      description: "Luxury ceramic, marble, and designer tiles for elegant floors and walls",
      items: ["Marble Collection", "Ceramic Elegance", "Mosaic Artistry"],
      color: "from-primary to-primary-dark",
      price: "From KES 1,500/sqm"
    },
    {
      icon: Lightbulb,
      title: "Designer Lighting",
      description: "Elegant chandeliers, pendant lights, and architectural lighting solutions",
      items: ["Crystal Chandeliers", "Modern Pendants", "Smart LED Systems"],
      color: "from-amber-500 to-orange-600",
      price: "From KES 5,000"
    },
    {
      icon: Home,
      title: "Luxury Furniture",
      description: "Contemporary and classic furniture pieces for sophisticated spaces",
      items: ["Living Collections", "Bedroom Suites", "Office Elegance"],
      color: "from-emerald-500 to-teal-600",
      price: "From KES 15,000"
    },
    {
      icon: Palette,
      title: "Wall Finishes",
      description: "Premium paints, wallpapers, and decorative wall treatments",
      items: ["Designer Paints", "Luxury Wallpapers", "Textured Finishes"],
      color: "from-primary-light to-primary",
      price: "From KES 2,500/5L"
    },
    {
      icon: Hammer,
      title: "Flooring Solutions",
      description: "Premium hardwood, laminate, vinyl, and luxury flooring options",
      items: ["Hardwood Elegance", "Modern Laminates", "Luxury Vinyl"],
      color: "from-blue-500 to-indigo-600",
      price: "From KES 2,000/sqm"
    },
    {
      icon: TreePine,
      title: "Outdoor Decor",
      description: "Weather-resistant materials for patios, gardens, and outdoor spaces",
      items: ["Deck Materials", "Garden Features", "Patio Furniture"],
      color: "from-green-500 to-emerald-600",
      price: "From KES 8,000"
    }
  ];

  const handleProductRotate = (index: number) => {
    setRotatingProducts(prev => [...prev, index]);
    setTimeout(() => {
      setRotatingProducts(prev => prev.filter(i => i !== index));
    }, 600);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Premium Collection</span>
          </div>
          
          <h2 className="text-elegant mb-6">
            Discover Our Luxury
            <span className="block text-primary mt-2">Tiles & Decor Collection</span>
          </h2>
          
          <p className="text-luxury max-w-3xl mx-auto">
            From exquisite tiles to designer lighting, explore our curated collection of premium 
            interior design materials that combine luxury aesthetics with affordable elegance.
          </p>
        </motion.div>

        {/* Categories Grid with Advanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { delay: index * 0.2, duration: 0.8 }
              } : {}}
              className="group relative overflow-hidden perspective-1000"
              onMouseEnter={() => {
                setHoveredCategory(index);
                handleProductRotate(index);
              }}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="card-elegant p-8 h-full transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-glow relative overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Icon with 3D Rotation */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 relative`}
                  animate={rotatingProducts.includes(index) ? { 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-full h-full text-white" />
                  
                  {/* Spinning Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={hoveredCategory === index ? {
                      background: [
                        `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)`,
                        `conic-gradient(from 360deg, transparent, rgba(255,255,255,0.3), transparent)`
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content with Stagger Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { 
                    opacity: 1,
                    transition: { delay: index * 0.2 + 0.3 }
                  } : {}}
                >
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-primary font-semibold text-sm mb-4">{category.price}</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Animated Items List */}
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredCategory === index ? { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: itemIndex * 0.1 }
                        } : { opacity: 1, x: 0 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-primary rounded-full mr-3"
                          animate={hoveredCategory === index ? { scale: [1, 1.5, 1] } : {}}
                          transition={{ delay: itemIndex * 0.1 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Interactive CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-dark font-medium relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Collection
                    <motion.div
                      animate={hoveredCategory === index ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={{ scaleX: 0 }}
                    animate={hoveredCategory === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Button>

                {/* Particle Effects */}
                {hoveredCategory === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 100],
                          y: [0, (Math.random() - 0.5) * 100],
                        }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        style={{
                          left: `${50 + (Math.random() - 0.5) * 20}%`,
                          top: `${50 + (Math.random() - 0.5) * 20}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Materials Showcase */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-elegant mb-6">
                Featured Material
                <span className="block text-primary mt-2">Showcase</span>
              </h3>
              
              <p className="text-luxury mb-8">
                Experience our materials in stunning detail with our 3D visualization tool. 
                See how each texture, color, and finish transforms your space before you buy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-luxury">
                  View 3D Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Download Catalog
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src={materialsImage}
                  alt="Premium Materials Showcase"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-primary text-white px-6 py-3 rounded-2xl shadow-luxury">
                <p className="text-sm font-semibold">500+ Materials</p>
                <p className="text-xs opacity-90">In Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;