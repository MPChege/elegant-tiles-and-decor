import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useResponsive } from "@/hooks/useResponsive";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();

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
          ? "bg-white shadow-elegant"
          : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="h-12 w-12 rounded-full border-2 border-accent flex items-center justify-center">
              <span className={`font-display text-lg ${
                isScrolled ? "text-primary" : "text-accent"
              }`}>
                ET
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-white/80 hover:text-accent"
                } ${
                  location.pathname === item.href 
                    ? (isScrolled ? "text-accent" : "text-accent") 
                    : ""
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`hidden ${isTablet ? 'sm:flex' : 'md:flex'} h-10 w-10 p-0 transition-colors rounded-full ${
                isScrolled 
                  ? "text-foreground/70 hover:text-accent hover:bg-secondary" 
                  : "text-white/70 hover:text-accent hover:bg-white/10"
              }`}
              onClick={() => window.location.href = '/search'}
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-10 w-10 p-0 relative transition-colors rounded-full ${
                isScrolled 
                  ? "text-foreground/70 hover:text-accent hover:bg-secondary" 
                  : "text-white/70 hover:text-accent hover:bg-white/10"
              }`}
              onClick={() => window.location.href = '/cart'}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] font-semibold">
                0
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`hidden ${isTablet ? 'sm:flex' : 'md:flex'} h-10 w-10 p-0 transition-colors rounded-full ${
                isScrolled 
                  ? "text-foreground/70 hover:text-accent hover:bg-secondary" 
                  : "text-white/70 hover:text-accent hover:bg-white/10"
              }`}
              onClick={() => window.location.href = '/profile'}
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden h-10 w-10 p-0 transition-colors rounded-full ${
                isScrolled 
                  ? "text-foreground/70 hover:text-accent hover:bg-secondary" 
                  : "text-white/70 hover:text-accent hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-elegant border-t border-border/30">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-accent transition-colors font-medium py-2 uppercase tracking-wider text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-border/30 pt-6 flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full" onClick={() => { window.location.href = '/search'; setIsMobileMenuOpen(false); }}>
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full" onClick={() => { window.location.href = '/cart'; setIsMobileMenuOpen(false); }}>
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full" onClick={() => { window.location.href = '/profile'; setIsMobileMenuOpen(false); }}>
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