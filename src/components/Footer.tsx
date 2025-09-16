import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowRight,
  Heart
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import elegantLogo from "@/assets/elegant-logo.jpg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section - Only show on homepage */}
        {isHomePage && (
          <div className="bg-gradient-primary rounded-3xl p-8 mb-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Stay Inspired
            </h3>
            
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Subscribe for design trends, exclusive offers, and project insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <img 
              src={elegantLogo} 
              alt="Elegant Decor Logo" 
              className="h-12 w-auto mb-4"
            />
            
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              Transforming spaces with premium materials.
            </p>
            
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
                { icon: Instagram, href: "#", label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            
            <nav className="space-y-2">
              {[
                "About Us",
                "Portfolio"
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-display font-semibold text-foreground mb-4">
              Our Services
            </h4>
            
            <nav className="space-y-2">
              {[
                "Residential Design",
                "Commercial Spaces"
              ].map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-display font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Westlands, Nairobi</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+254123456789"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +254 123 456 789
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@elegantdecor.co.ke"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@elegantdecor.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Elegant Decor Team</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2024 Elegant Decor. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;