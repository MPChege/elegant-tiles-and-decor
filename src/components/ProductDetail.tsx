import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Star, 
  Heart, 
  ShoppingCart, 
  RotateCcw, 
  ZoomIn, 
  Minus, 
  Plus,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProductDetailProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  similarProducts: any[];
}

const ProductDetail = ({ product, isOpen, onClose, similarProducts }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("mpesa");

  if (!product) return null;

  // Mock multiple product images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image, // In real app, these would be different angles
    product.image,
    product.image
  ];

  const handleRotate = () => {
    setRotation(prev => prev + 90);
  };

  const paymentOptions = [
    { id: "mpesa", name: "M-Pesa", icon: "📲", color: "bg-green-600" },
    { id: "card", name: "Credit Card", icon: CreditCard, color: "bg-blue-600" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative group">
              <motion.img
                key={selectedImage}
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                style={{ transform: `rotate(${rotation}deg)` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" onClick={handleRotate}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImage 
                      ? "border-primary scale-105" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
              <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  {product.bestseller && (
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                      Bestseller
                    </span>
                  )}
                  {product.new && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      New
                    </span>
                  )}
                </div>

                {/* Title & Rating */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="border-t pt-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-primary">
                  KES {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    KES {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="border-t pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Payment Options */}
            <div className="border-t pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="grid grid-cols-1 gap-3">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPayment(option.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                      selectedPayment === option.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center`}>
                      {typeof option.icon === 'string' ? (
                        <span className="text-lg">{option.icon}</span>
                      ) : (
                        <option.icon className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="font-medium">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t pt-6 space-y-3">
              <Button className="w-full h-12 text-lg" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="outline" className="h-12">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Product Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Material", value: "Premium Quality" },
                  { label: "Warranty", value: "5 Years" },
                  { label: "Installation", value: "Available" },
                  { label: "Delivery", value: "2-3 Days" }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">{feature.label}</p>
                    <p className="font-semibold">{feature.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="border-t bg-gray-50 p-6">
            <h3 className="text-xl font-bold mb-4">Similar Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarProducts.slice(0, 4).map((similar, index) => (
                <motion.div
                  key={similar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={similar.image}
                    alt={similar.name}
                    className="w-full aspect-square object-cover rounded-lg mb-2"
                  />
                  <h4 className="font-medium text-sm mb-1">{similar.name}</h4>
                  <p className="text-primary font-semibold text-sm">
                    KES {similar.price.toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;