import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Filter, Grid3X3, List, Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ProductDetail from "@/components/ProductDetail";
import { productImages } from "@/assets/imageAssets";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  bestseller?: boolean;
  new?: boolean;
  featured?: boolean;
  tags: string[];
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const categories = [
    { id: "all", name: "All Products", count: 250 },
    { id: "floor-tiles", name: "Floor Tiles", count: 45 },
    { id: "wall-tiles", name: "Wall Tiles", count: 38 },
    { id: "doors", name: "Doors", count: 32 },
    { id: "sinks", name: "Sinks & Basins", count: 28 },
    { id: "showers", name: "Shower Systems", count: 25 },
    { id: "outdoor-tiles", name: "Outdoor Tiles", count: 22 },
    { id: "mosaic", name: "Mosaic", count: 20 },
    { id: "bathroom", name: "Bathroom Fixtures", count: 18 },
    { id: "lighting", name: "Lighting", count: 15 },
    { id: "natural-stone", name: "Natural Stone", count: 12 },
    { id: "ceramic", name: "Ceramic", count: 7 }
  ];

  const products = [
    {
      id: 1,
      name: "Marble Elegance",
      category: "floor-tiles",
      price: 2500,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6354f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.9,
      reviews: 156,
      inStock: true,
      bestseller: true,
      tags: ["Premium", "Marble", "Luxury"]
    },
    {
      id: 2,
      name: "Premium Italian Marble",
      category: "floor-tiles",
      price: 3200,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.8,
      reviews: 92,
      inStock: true,
      featured: true,
      tags: ["Italian", "Marble", "Premium"]
    },
    {
      id: 3,
      name: "Designer Lighting Collection",
      category: "lighting",
      price: 8500,
      originalPrice: 9200,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.7,
      reviews: 67,
      inStock: true,
      new: true,
      tags: ["Designer", "Chandelier", "Luxury"]
    },
    {
      id: 4,
      name: "Wall Colors Premium",
      category: "wall-tiles",
      price: 1800,
      originalPrice: 2000,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.6,
      reviews: 84,
      inStock: true,
      tags: ["Wall", "Colors", "Premium"]
    },
    {
      id: 5,
      name: "Natural Stone Collection",
      category: "natural-stone",
      price: 4200,
      originalPrice: 4800,
      image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.9,
      reviews: 124,
      inStock: true,
      bestseller: true,
      tags: ["Natural", "Stone", "Durable"]
    },
    {
      id: 6,
      name: "Ceramic Dreams",
      category: "ceramic",
      price: 1200,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.5,
      reviews: 78,
      inStock: true,
      new: true,
      tags: ["Ceramic", "Modern", "Affordable"]
    },
    {
      id: 7,
      name: "Luxury Porcelain",
      category: "floor-tiles",
      price: 2800,
      originalPrice: 3200,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.8,
      reviews: 96,
      inStock: true,
      featured: true,
      tags: ["Porcelain", "Luxury", "Durable"]
    },
    {
      id: 8,
      name: "Outdoor Tile Collection",
      category: "outdoor-tiles",
      price: 2100,
      originalPrice: 2400,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 4.4,
      reviews: 63,
      inStock: true,
      tags: ["Outdoor", "Weatherproof", "Slip-resistant"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.id - b.id; // Default sort by ID
  });

  const getSimilarProducts = (currentProduct: Product) => {
    return products
      .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
      .slice(0, 4);
  };

  const ProductCard = ({ product, index }: { product: Product; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-3xl shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 cursor-pointer relative"
      onClick={() => setSelectedProduct(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.bestseller && (
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Bestseller
            </span>
          )}
          {product.new && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              New
            </span>
          )}
          {product.featured && (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/90 hover:bg-white shadow-md backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              // Add to wishlist logic
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/90 hover:bg-white shadow-md backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            KES {product.price.toLocaleString()}/sqm
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through">
              KES {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Button 
          className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-3 transition-all duration-300 hover:scale-[1.02]"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Notify When Available"}
        </Button>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <SEO
        title="Premium Tiles & Flooring Products"
        description="Browse our extensive collection of premium tiles, marble, ceramic, porcelain & natural stone. Quality products with professional installation across Kenya."
        keywords="tiles Kenya, marble tiles, ceramic tiles, porcelain tiles, natural stone, mosaic tiles, floor tiles, wall tiles"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 pt-24" ref={sectionRef}>
        <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Premium Tile
            <span className="block text-primary">Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of premium tiles, from classic elegance to contemporary designs. 
            Quality that transforms spaces.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search products, categories, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg rounded-2xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filters */}
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary text-white shadow-glow hover:bg-primary-dark"
                        : "hover:bg-primary/10 border-2"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort & View Controls */}
            <div className="md:w-1/4 flex flex-col gap-4">
              <div className="flex gap-2">
                <label htmlFor="sort-products" className="sr-only">Sort products by</label>
                <select 
                  id="sort-products"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 rounded-xl border border-gray-200 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-md flex-1"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-md flex-1"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}
        >
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Load More */}
        {sortedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline" className="rounded-full px-8 py-3 text-lg hover:shadow-lg transition-all">
              Load More Products
            </Button>
          </motion.div>
        )}

        {/* Product Detail Modal */}
        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          similarProducts={selectedProduct ? getSimilarProducts(selectedProduct) : []}
        />
        </div>
      </div>
    </Layout>
  );
};

export default Products;