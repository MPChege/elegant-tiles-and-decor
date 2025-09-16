import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowRight
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter Section - Only show on homepage */}
        {isHomePage && (
          <div className="py-16 border-b border-gray-200">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Stay Updated
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                Get the latest design trends, product launches, and exclusive offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address"
                  className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                />
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-light tracking-wide mb-4">
                <span className="text-gray-900">Elegant</span>
                <span className="text-pink-500 ml-1">Tiles</span>
                <span className="text-gray-600 text-base ml-2">& Decor</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Transforming spaces with premium tiles, sophisticated lighting, and elegant decor solutions. 
                Creating beautiful interiors that reflect your unique style.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
                  { icon: Instagram, href: "#", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-200 hover:bg-pink-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-6">
                Explore
              </h4>
              
              <nav className="space-y-3">
                {[
                  { name: "Tile Collections", href: "/products" },
                  { name: "Lighting Solutions", href: "/services" },
                  { name: "Design Portfolio", href: "/portfolio" },
                  { name: "About Us", href: "/about" },
                  { name: "Design Services", href: "/services" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-6">
                Contact
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600 font-medium">Showroom</p>
                    <p className="text-gray-600 text-sm">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600 font-medium">Phone</p>
                    <a 
                      href="tel:+254123456789"
                      className="text-gray-600 text-sm hover:text-pink-600 transition-colors"
                    >
                      +254 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600 font-medium">Email</p>
                    <a 
                      href="mailto:info@eleganttilesdecor.com"
                      className="text-gray-600 text-sm hover:text-pink-600 transition-colors"
                    >
                      info@eleganttilesdecor.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2024 Elegant Tiles & Decor. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-pink-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;