import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RotateCcw, 
  ZoomIn, 
  Heart, 
  ShoppingCart, 
  Star, 
  ArrowLeft,
  ArrowRight,
  Palette,
  Layers,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("tiles");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "tiles", name: "Premium Tiles", icon: Layers },
    { id: "lighting", name: "Designer Lighting", icon: Sparkles },
    { id: "paint", name: "Wall Colors", icon: Palette },
  ];

  const products = {
    tiles: [
      {
        id: 1,
        name: "Marble Elegance",
        price: "KES 2,500/sqm",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6354f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.9,
        description: "Premium Italian marble tiles with natural veining"
      },
      {
        id: 2,
        name: "Modern Ceramic",
        price: "KES 1,800/sqm",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.7,
        description: "Contemporary ceramic tiles for modern spaces"
      },
      {
        id: 3,
        name: "Rustic Stone",
        price: "KES 3,200/sqm",
        image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.8,
        description: "Natural stone tiles with authentic texture"
      }
    ],
    lighting: [
      {
        id: 4,
        name: "Crystal Chandelier",
        price: "KES 45,000",
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 5.0,
        description: "Elegant crystal chandelier for luxury spaces"
      },
      {
        id: 5,
        name: "Modern Pendant",
        price: "KES 8,500",
        image: "https://images.unsplash.com/photo-1571509595382-0877c7e7a7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.6,
        description: "Minimalist pendant light for contemporary homes"
      }
    ],
    paint: [
      {
        id: 6,
        name: "Royal Burgundy",
        price: "KES 3,500/5L",
        image: "https://images.unsplash.com/photo-1582582494215-19b363eac9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.8,
        description: "Premium wall paint in royal burgundy"
      },
      {
        id: 7,
        name: "Pearl White",
        price: "KES 3,200/5L",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        rating: 4.9,
        description: "Elegant pearl white with subtle shimmer"
      }
    ]
  };

  const currentProducts = products[selectedCategory as keyof typeof products];
  const currentProduct = currentProducts[selectedProduct];

  const handleRotate = () => {
    setIsRotating(true);
    setRotation(prev => prev + 90);
    setTimeout(() => setIsRotating(false), 500);
  };

  const nextProduct = () => {
    setSelectedProduct((prev) => (prev + 1) % currentProducts.length);
  };

  const prevProduct = () => {
    setSelectedProduct((prev) => (prev - 1 + currentProducts.length) % currentProducts.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <RotateCcw className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">3D Product Experience</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-elegant mb-6"
          >
            Interactive Product
            <span className="block text-primary mt-2">Showcase</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-luxury max-w-3xl mx-auto"
          >
            Experience our products like never before. Rotate, zoom, and explore every detail 
            of our premium tiles, lighting, and decor items.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-2xl p-2 shadow-card">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedProduct(0);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Product View */}
          <motion.div
            key={selectedCategory + selectedProduct}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 relative overflow-hidden group">
              {/* Product Image with 3D Effect */}
              <motion.div
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
                style={{ perspective: "1000px" }}
              >
                <div 
                  className="w-full h-full rounded-2xl shadow-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500"
                  style={{ 
                    background: `url(${currentProduct.image}) center/cover`,
                    transform: `rotateY(${rotation}deg)`,
                  }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>

              {/* Interactive Controls */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={handleRotate}
                  disabled={isRotating}
                  className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                >
                  <RotateCcw className={`h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} />
                </Button>
                
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>

              {/* Navigation */}
              <button
                onClick={prevProduct}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center"
                aria-label="Previous product"
                title="Previous product"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextProduct}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center"
                aria-label="Next product"
                title="Next product"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Product Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {currentProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === selectedProduct
                        ? "bg-primary scale-125"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`View product ${index + 1}`}
                    title={`View product ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(currentProduct.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({currentProduct.rating}) • 156 reviews
              </span>
            </div>

            {/* Product Info */}
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                {currentProduct.name}
              </h3>
              <p className="text-primary text-2xl font-semibold">
                {currentProduct.price}
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Color/Style Options */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Available Options</h4>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors"
                    style={{
                      background: `hsl(${i * 60}, 50%, ${50 + i * 10}%)`,
                    }}
                    aria-label={`Color option ${i + 1}`}
                    title={`Color option ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                className="btn-luxury flex-1"
                onClick={() => window.location.href = '/consultation'}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/products'}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: "Premium Quality", value: "Guaranteed" },
                { label: "Delivery", value: "2-3 Days" },
                { label: "Warranty", value: "5 Years" },
                { label: "Installation", value: "Available" }
              ].map((feature, index) => (
                <div key={index} className="bg-secondary/50 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">{feature.label}</p>
                  <p className="font-semibold text-foreground">{feature.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;