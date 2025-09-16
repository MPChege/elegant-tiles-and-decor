import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Filter, Grid3X3, List, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState("grid");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const categories = [
    "Floor Tiles", "Wall Tiles", "Outdoor Tiles", "Mosaic", 
    "Natural Stone", "Ceramic", "Marble", "Porcelain"
  ];

  const priceRanges = [
    "Under KES 1,000", "KES 1,000 - 2,000", "KES 2,000 - 5,000", "Over KES 5,000"
  ];

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
      <SEO
        title="Search Products - Find Your Perfect Tiles"
        description="Search through our extensive collection of premium tiles, flooring, and decor. Advanced filters to find exactly what you need."
        keywords="search tiles, find tiles, tile search, product search, interior design search"
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
            Find Your Perfect
            <span className="block text-primary">Design Solution</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Search through thousands of premium products to discover exactly what you need for your space transformation.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <Input
              placeholder="Search for tiles, materials, colors, styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 pr-16 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:border-primary bg-white shadow-card"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-gray-600">Active Filters:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <motion.div
                    key={filter}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {filter}
                    <button
                      onClick={() => toggleFilter(filter)}
                      className="hover:bg-white/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Filter Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Product Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilters.includes(category) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(category)}
                    className="justify-start text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Price Range
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {priceRanges.map((range) => (
                  <Button
                    key={range}
                    variant={activeFilters.includes(range) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(range)}
                    className="justify-start text-sm"
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* View Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">View as:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-md"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-md"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="text-gray-600">
              {searchQuery || activeFilters.length > 0 
                ? "Showing filtered results" 
                : "Ready to search"
              }
            </p>
          </div>
        </motion.div>

        {/* Search Results Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center py-24"
        >
          <div className="max-w-md mx-auto">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Start Your Search
            </h3>
            <p className="text-muted-foreground">
              {searchQuery || activeFilters.length > 0 
                ? "Processing your search criteria..." 
                : "Enter a search term or select filters to discover amazing products."
              }
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;