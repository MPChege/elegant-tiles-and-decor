import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Settings, ShoppingBag, Heart, MapPin, Phone, Mail, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+254 700 123 456",
    address: "123 Nairobi Street, Westlands",
    joinDate: "January 2023"
  });

  const [isEditing, setIsEditing] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 4500,
      items: 3
    },
    {
      id: "ORD-002",
      date: "2024-01-08",
      status: "Processing",
      total: 7800,
      items: 5
    }
  ];

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Premium Marble Collection",
      price: 2850,
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Designer Mosaic Series",
      price: 3200,
      image: "/api/placeholder/150/150"
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
        <SEO
          title="My Profile - Account Settings"
          description="Manage your account, view order history, and track your design journey with Elegant Tiles & Decor."
          keywords="user profile, account settings, order history, user dashboard"
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
              My Account
              <span className="block text-primary">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage your profile, track orders, and explore your design journey.
            </p>
          </motion.div>

          {/* Profile Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-card p-8 mb-12 border border-gray-100"
          >
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  Welcome back, {user.name.split(' ')[0]}!
                </h2>
                <p className="text-muted-foreground mb-2">
                  Member since {user.joinDate}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {user.phone}
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                className="rounded-full"
              >
                <Edit2 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </motion.div>

          {/* Main Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-card p-6 text-center border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">12</h3>
                    <p className="text-muted-foreground">Total Orders</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-card p-6 text-center border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">8</h3>
                    <p className="text-muted-foreground">Wishlist Items</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-card p-6 text-center border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">3</h3>
                    <p className="text-muted-foreground">Saved Addresses</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">Order #ORD-001 delivered</p>
                        <p className="text-sm text-muted-foreground">January 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">Added items to wishlist</p>
                        <p className="text-sm text-muted-foreground">January 12, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-card p-6 border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground">Order {order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        {order.items} items • KES {order.total.toLocaleString()}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Track Order</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="wishlist" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                        <p className="text-primary font-bold mb-4">
                          KES {item.price.toLocaleString()}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Add to Cart</Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-gray-400 hover:text-red-500"
                            aria-label={`Remove ${item.name} from wishlist`}
                            title={`Remove ${item.name} from wishlist`}
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                    Personal Information
                  </h3>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        value={user.name}
                        onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        value={user.email}
                        onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={user.phone}
                        onChange={(e) => setUser(prev => ({ ...prev, phone: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <Input
                        value={user.address}
                        onChange={(e) => setUser(prev => ({ ...prev, address: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                
                  {isEditing && (
                    <div className="flex gap-4 mt-6">
                      <Button className="bg-primary hover:bg-primary-dark text-white">
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;