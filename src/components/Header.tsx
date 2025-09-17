import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Tiles", href: "/products" },
    { name: "Lighting", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl font-display font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                Elegant
              </span>
              <br />
              <span className="text-primary-light">Tiles</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? "text-gray-700 hover:text-pink-600" 
                    : "text-white/90 hover:text-white"
                } ${
                  location.pathname === item.href 
                    ? (isScrolled ? "text-pink-600" : "text-white") 
                    : ""
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`hidden md:flex h-10 w-10 p-0 transition-colors ${
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                  : "text-white/90 hover:text-white hover:bg-white/20"
              }`}
              onClick={() => window.location.href = '/search'}
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-10 w-10 p-0 relative transition-colors ${
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                  : "text-white/90 hover:text-white hover:bg-white/20"
              }`}
              onClick={() => window.location.href = '/cart'}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] font-medium">
                0
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`hidden md:flex h-10 w-10 p-0 transition-colors ${
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                  : "text-white/90 hover:text-white hover:bg-white/20"
              }`}
              onClick={() => window.location.href = '/profile'}
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden h-10 w-10 p-0 transition-colors ${
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900" 
                  : "text-white/90 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-4 flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0" onClick={() => { window.location.href = '/search'; setIsMobileMenuOpen(false); }}>
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0" onClick={() => { window.location.href = '/cart'; setIsMobileMenuOpen(false); }}>
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0" onClick={() => { window.location.href = '/profile'; setIsMobileMenuOpen(false); }}>
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;