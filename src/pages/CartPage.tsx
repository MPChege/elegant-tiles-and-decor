import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, Truck, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Marble Collection",
      price: 2850,
      quantity: 2,
      image: "/api/placeholder/300/300",
      inStock: true,
      variant: "Beige, 60x60cm"
    },
    {
      id: 2,
      name: "Designer Mosaic Series",
      price: 3200,
      quantity: 1,
      image: "/api/placeholder/300/300",
      inStock: true,
      variant: "Maroon Mix, 30x30cm"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const tax = subtotal * 0.16; // 16% VAT
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
      <SEO
        title="Shopping Cart - Review Your Order"
        description="Review your selected tiles and decor items. Secure checkout with free delivery on orders over KES 5,000."
        keywords="shopping cart, checkout, tile order, secure payment"
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
            Your Shopping
            <span className="block text-primary">Cart</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Review your selected items and proceed to secure checkout.
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-24"
          >
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Your Cart is Empty
              </h3>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
                Continue Shopping
              </Button>
            </div>
          </motion.div>
        ) : (
          // Cart Content
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="bg-white rounded-2xl shadow-card p-6 border border-gray-100"
                  >
                    <div className="flex items-center gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.variant}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          KES {item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label={`Remove ${item.name} from cart`}
                        title={`Remove ${item.name} from cart`}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 sticky top-24"
              >
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow"
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                {/* Order Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">KES {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? "Free" : `KES ${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (16%)</span>
                    <span className="font-semibold">KES {tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-lg font-bold text-primary">
                        KES {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-4 text-lg font-semibold mb-6">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>

                {/* Trust Indicators */}
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span>Free delivery on orders over KES 5,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                    <span>Multiple payment options</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
};

export default CartPage;