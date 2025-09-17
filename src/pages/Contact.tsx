import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "123 Design Street, Nairobi, Kenya"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+254 700 123 456"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@eleganttilesanddecor.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM"
    }
  ];

  return (
    <Layout>
      <SEO
        title="Contact Elegant Tiles & Decor"
        description="Get in touch with our team for premium tiles, lighting, and interior design services. We're here to help transform your space."
        keywords="contact tiles Kenya, interior design consultation, tile installation services, lighting solutions"
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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or ready to start your project? Reach out to our team and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 rounded-2xl overflow-hidden bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 123 456"
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or ask any questions..."
                      required
                      rows={5}
                      className="rounded-xl py-4"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-6 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">How long does delivery take?</h3>
                  <p className="text-muted-foreground">
                    Delivery typically takes 3-5 business days within Nairobi and 5-7 business days for other major cities in Kenya.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Do you offer installation services?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide professional installation services for all our products with our certified technicians. 
                    <a href="/consultation" className="text-primary hover:underline"> Book a consultation</a> to discuss your project.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept M-Pesa, bank transfers, credit cards, and cash payments at our showroom.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Do you provide design consultation?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Our design experts offer free consultation to help you visualize and plan your space transformation. 
                    <a href="/consultation" className="text-primary hover:underline"> Schedule your free consultation</a> today.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;