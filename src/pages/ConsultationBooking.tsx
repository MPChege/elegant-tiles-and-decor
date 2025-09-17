import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Home, 
  Building, 
  Church, 
  TreePine, 
  Hammer,
  MapPin,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "residential",
    propertyType: "",
    projectDetails: "",
    preferredDate: "",
    preferredTime: "",
    budget: ""
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "residential",
      propertyType: "",
      projectDetails: "",
      preferredDate: "",
      preferredTime: "",
      budget: ""
    });
  };

  const serviceTypes = [
    { id: "residential", name: "Residential Design", icon: Home, description: "Home makeovers, renovations, and interior design" },
    { id: "commercial", name: "Commercial Spaces", icon: Building, description: "Office spaces, retail stores, and business environments" },
    { id: "worship", name: "Worship Spaces", icon: Church, description: "Churches, temples, and spiritual environments" },
    { id: "outdoor", name: "Outdoor Spaces", icon: TreePine, description: "Gardens, patios, and landscape design" },
    { id: "renovation", name: "Complete Renovations", icon: Hammer, description: "Full-scale renovation projects" }
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const budgetRanges = [
    "KES 150,000 - 300,000",
    "KES 300,000 - 500,000",
    "KES 500,000 - 1,000,000",
    "KES 1,000,000+"
  ];

  return (
    <Layout>
      <SEO
        title="Book a Design Consultation"
        description="Schedule your free design consultation with our expert team. Discuss your project vision and get professional advice."
        keywords="design consultation, book appointment, interior design Kenya, tile consultation, home renovation planning"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Book Your <span className="text-primary">Design Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a free consultation with our expert designers. Discuss your vision and get professional advice 
              tailored to your space and budget.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div className="bg-white rounded-3xl shadow-card p-12 border border-gray-100">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Consultation Request Received!
                </h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for booking your consultation. Our team will review your request and contact you 
                  within 24 hours to confirm your appointment.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary-dark text-white rounded-xl px-8 py-3"
                >
                  Book Another Consultation
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0">
                  <div 
                    className="h-full bg-primary transition-all duration-500" 
                    style={{ width: step === 1 ? '50%' : '100%' }}
                  ></div>
                </div>
                
                {[1, 2].map((num) => (
                  <div key={num} className="relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= num ? 'bg-primary text-white' : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}>
                      {num}
                    </div>
                    <p className="text-sm font-medium mt-2 text-center">
                      {num === 1 ? 'Your Details' : 'Project Info'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                      Personal Information
                    </h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="pl-10 py-6 rounded-xl"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                              className="pl-10 py-6 rounded-xl"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+254 700 123 456"
                              required
                              className="pl-10 py-6 rounded-xl"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                            Service Type *
                          </label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full py-6 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            {serviceTypes.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end pt-6">
                        <Button 
                          type="button"
                          onClick={() => setStep(2)}
                          className="bg-primary hover:bg-primary-dark text-white rounded-xl px-8 py-3"
                          disabled={!formData.name || !formData.email || !formData.phone}
                        >
                          Continue
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                      Project Information
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                            Property Type *
                          </label>
                          <div className="relative">
                            <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="propertyType"
                              name="propertyType"
                              value={formData.propertyType}
                              onChange={handleChange}
                              placeholder="e.g., Apartment, Villa, Office"
                              required
                              className="pl-10 py-6 rounded-xl"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                            Estimated Budget *
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full py-6 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              className="pl-10 py-6 rounded-xl"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                            Preferred Time *
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleChange}
                              required
                              className="w-full pl-10 py-6 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                              <option value="">Select time slot</option>
                              {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="projectDetails" className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="projectDetails"
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleChange}
                          placeholder="Tell us about your project, vision, and specific requirements..."
                          required
                          rows={5}
                          className="rounded-xl py-4"
                        />
                      </div>
                      
                      <div className="flex justify-between pt-6">
                        <Button 
                          type="button"
                          onClick={() => setStep(1)}
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl px-8 py-3"
                        >
                          Back
                        </Button>
                        
                        <Button 
                          type="submit"
                          className="bg-primary hover:bg-primary-dark text-white rounded-xl px-8 py-3"
                        >
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>

              {/* Service Information */}
              <div className="mt-12 bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Why Book a Consultation?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Advice</h4>
                    <p className="text-muted-foreground text-sm">
                      Get personalized recommendations from our experienced designers.
                    </p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Site Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      On-site evaluation to understand your space and requirements.
                    </p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Custom Solutions</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored design solutions that fit your style and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ConsultationBooking;