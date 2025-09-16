import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ShoppingCart, X, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Premium Marble Collection",
      price: 2850,
      originalPrice: 3200,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      inStock: true,
      addedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Designer Mosaic Series",
      price: 3200,
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      inStock: true,
      addedDate: "2024-01-10"
    }
  ]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // This would typically integrate with a cart system
    console.log("Moving item to cart:", id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
      <SEO
        title="Your Wishlist - Saved Items"
        description="View and manage your saved tiles and decor items. Keep track of products you love for future purchase."
        keywords="wishlist, saved items, favorites, tile wishlist"
      />

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Your Design
            <span className="block text-primary">Wishlist</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep track of products you love and revisit them when you're ready to transform your space.
          </p>
        </motion.div>

        {wishlistItems.length === 0 ? (
          // Empty State
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-24"
          >
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Your Wishlist is Empty
              </h3>
              <p className="text-muted-foreground mb-8">
                Start browsing our collection and save items you love for later.
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
                Browse Products
              </Button>
            </div>
          </motion.div>
        ) : (
          // Wishlist Items
          <div>
            {/* Wishlist Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-between items-center mb-8 p-6 bg-white rounded-2xl shadow-card"
            >
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  {wishlistItems.length} Items Saved
                </h2>
                <p className="text-muted-foreground">
                  Total value: KES {wishlistItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share List
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add All to Cart
                </Button>
              </div>
            </motion.div>

            {/* Wishlist Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {wishlistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="group bg-white rounded-3xl shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-red-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Sale Badge */}
                    {item.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Sale
                        </span>
                      </div>
                    )}

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => moveToCart(item.id)}
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
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
                              i < Math.floor(item.rating) 
                                ? "text-yellow-400 fill-current" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        KES {item.price.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through">
                          KES {item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Added Date */}
                    <p className="text-sm text-gray-500 mb-4">
                      Added on {new Date(item.addedDate).toLocaleDateString()}
                    </p>

                    {/* Stock Status */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        item.inStock ? "text-green-600" : "text-red-600"
                      }`}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;