import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Star, Briefcase, Building2, Hotel, Calendar, Phone, Mail } from "lucide-react";

const Lighting = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const lightingServices = [
    {
      category: "Residential",
      icon: <Briefcase className="h-5 w-5" />,
      title: "Luxury Home Lighting Design",
      description: "Transform your living spaces with bespoke lighting solutions that blend functionality with artistic elegance.",
      features: [
        "Custom lighting plans for each room",
        "Smart home lighting integration",
        "Accent lighting for architectural features",
        "Energy-efficient LED solutions",
        "Dimming systems for mood lighting"
      ],
      benefits: [
        "Enhanced ambiance and atmosphere",
        "Improved functionality and task lighting",
        "Energy savings of up to 60%",
        "Increased property value",
        "Personalized lighting control"
      ],
      investment: "KES 150,000 - 500,000",
      duration: "4-8 weeks",
      image: "/api/placeholder/800/600"
    },
    {
      category: "Commercial",
      icon: <Building2 className="h-5 w-5" />,
      title: "Commercial Lighting Excellence",
      description: "Create professional environments that enhance productivity and reflect your brand identity through strategic lighting design.",
      features: [
        "Office lighting optimization",
        "Retail space lighting strategies",
        "Task lighting for workspaces",
        "Emergency lighting solutions",
        "Smart lighting control systems"
      ],
      benefits: [
        "Improved workplace productivity",
        "Enhanced brand perception",
        "Compliance with safety standards",
        "Reduced maintenance costs",
        "Modern, professional appearance"
      ],
      investment: "KES 300,000 - 1,500,000",
      duration: "6-12 weeks",
      image: "/api/placeholder/800/600"
    },
    {
      category: "Hospitality",
      icon: <Hotel className="h-5 w-5" />,
      title: "Hospitality Lighting Solutions",
      description: "Craft memorable guest experiences through lighting designs that create ambiance, highlight architectural features, and enhance functionality.",
      features: [
        "Lobby and common area lighting",
        "Room-specific lighting schemes",
        "Smart control systems for guest comfort",
        "Accent lighting for decor features",
        "Energy management solutions"
      ],
      benefits: [
        "Enhanced guest experience",
        "Improved space functionality",
        "Brand identity reinforcement",
        "Operational cost savings",
        "Compliance with hospitality standards"
      ],
      investment: "KES 500,000 - 2,500,000",
      duration: "8-16 weeks",
      image: "/api/placeholder/800/600"
    },
    {
      category: "Specialty",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Specialty Lighting Design",
      description: "Create unique lighting experiences that transform spaces into memorable environments.",
      features: [
        "Architectural lighting features",
        "Statement chandelier installations",
        "Outdoor landscape lighting",
        "Custom lighting fixtures",
        "Lighting automation systems"
      ],
      benefits: [
        "Dramatic visual impact",
        "Unique design elements",
        "Energy-efficient solutions",
        "Low maintenance requirements",
        "Long-lasting installations"
      ],
      investment: "KES 100,000 - 800,000",
      duration: "3-8 weeks",
      image: "/api/placeholder/800/600"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen" ref={sectionRef}>
        <SEO
          title="Lighting Design & Installation Services"
          description="Professional lighting design services for residential, commercial, and hospitality spaces across Kenya. Create environments that inspire with our expert lighting solutions."
          keywords="lighting design Kenya, residential lighting, commercial lighting, hospitality lighting, smart lighting systems, LED lighting solutions"
        />

        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-medium">Illuminating Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Lighting Design
                <span className="block text-primary">& Installation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Elevate your space with lighting solutions that combine functionality, 
                aesthetics, and energy efficiency. Our expert designers create lighting 
                environments that transform spaces into extraordinary experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {lightingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[16/9] bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-card group-hover:shadow-luxury transition-shadow duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      {service.icon}
                      <span>{service.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Investment</p>
                        <p className="font-semibold text-primary">{service.investment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                        <p className="font-semibold text-primary">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Why Choose Our Lighting Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 mb-16"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-primary text-sm font-medium">Award-Winning Excellence</span>
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Why Choose Our
                    <span className="block text-primary">Lighting Services</span>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Our lighting specialists bring years of expertise in creating environments that
                    combine functionality, aesthetics, and energy efficiency to transform spaces.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Button>
                    
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                      <Mail className="mr-2 h-5 w-5" />
                      Request Service Details
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lightingServices.map((service, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
                        <div className="text-primary font-medium mb-2">
                          {service.category}
                        </div>
                        
                        <h3 className="font-display font-bold text-foreground text-xl mb-3">
                          {service.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Process */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-medium">Our Process</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                The Lighting
                <span className="block text-primary">Design Process</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                We follow a structured yet flexible approach to ensure every lighting project meets our high standards
                of excellence while addressing our clients' unique needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "01", title: "Discovery", desc: "Understanding your vision, space, and functional requirements" },
                  { number: "02", title: "Design", desc: "Creating custom lighting plans that blend aesthetics and functionality" },
                  { number: "03", title: "Implementation", desc: "Expert installation with premium lighting products" },
                  { number: "04", title: "Reveal", desc: "Final tuning and client walkthrough" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
            >
              {[
                { number: "150+", label: "Lighting Projects Completed" },
                { number: "98%", label: "Client Satisfaction Rate" },
                { number: "5.0", label: "Average Rating" },
                { number: "25+", label: "Awards Won" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
                >
                  <div className="text-3xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-medium">Client Satisfaction</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                What Our Clients
                <span className="block text-primary">Say About Us</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Don't just take our word for it. Here's what our valued clients have said about
                their experience with our lighting design services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    rating: 5,
                    text: "The lighting transformation in our home is absolutely stunning. Every room now has its own unique character while maintaining a cohesive flow. The team's attention to detail is exceptional."
                  },
                  {
                    rating: 5,
                    text: "We couldn't be happier with the lighting solutions in our new office. The ambiance is perfect for both productivity and client meetings, and the smart controls make it so easy to adjust the lighting as needed."
                  },
                  {
                    rating: 5,
                    text: "The lighting in our hotel lobby has become our signature feature. Guests constantly compliment the elegant, welcoming atmosphere created by the lighting design."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-card border border-gray-100"
                  >
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-primary font-semibold">- A Satisfied Client</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Lighting;