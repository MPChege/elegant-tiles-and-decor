import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, MapPin, Phone, Mail, Star, Briefcase, Building2, Lightbulb, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const milestones = [
    { 
      year: "2010", 
      title: "Founding Vision",
      subtitle: "A New Standard in Design",
      desc: "Established with a mission to make luxury interior design accessible",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Opened first showroom in Nairobi",
        "Launched initial product collection",
        "Pioneered accessible luxury concept"
      ]
    },
    { 
      year: "2015", 
      title: "Strategic Expansion",
      subtitle: "Doubling Our Impact",
      desc: "Doubled our presence with a second showroom",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Expanded product offerings",
        "Enhanced customer service capabilities",
        "Launched design consultation service"
      ]
    },
    { 
      year: "2018", 
      title: "Industry Recognition",
      subtitle: "Award-Winning Excellence",
      desc: "Awarded Kenya Interior Design Excellence",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Featured in Kenya Home Design Magazine",
        "Selected as top 10 interior design firm",
        "Received Kenya Design Award"
      ]
    },
    { 
      year: "2020", 
      title: "Digital Transformation",
      subtitle: "Reimagining the Experience",
      desc: "Launched comprehensive online platform",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Introduced virtual design consultations",
        "Expanded nationwide shipping",
        "Launched interactive design tool"
      ]
    },
    { 
      year: "2023", 
      title: "Premium Collection",
      subtitle: "Elevating Standards",
      desc: "Introduced luxury tile collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Partnered with European manufacturers",
        "Expanded commercial offerings",
        "Launched sustainable design initiative"
      ]
    },
    { 
      year: "2024", 
      title: "150+ Transformations",
      subtitle: "A Legacy of Excellence",
      desc: "Milestone achievement in successful projects",
      image: "https://images.unsplash.com/photo-1556909508-4beb8c43e5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Expanded team with additional designers",
        "Introduced design service packages",
        "Celebrated 14 years of excellence"
      ]
    }
  ];

  const team = [
    {
      name: "Sarah Wanjiku",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      experience: "12+ years",
      certifications: ["Certified Interior Designer", "LEED Accredited Professional"]
    },
    {
      name: "Michael Ochieng",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      experience: "8+ years",
      certifications: ["Certified Residential Specialist", "NKBA Certified"]
    },
    {
      name: "Grace Muthoni",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496358961-3c82d2d47cc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      experience: "10+ years",
      certifications: ["Certified Kitchen & Bath Designer", "PMP Certified"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "25+", label: "Design Awards" },
    { icon: Clock, number: "150+", label: "Projects Completed" },
    { icon: MapPin, number: "3", label: "Showroom Locations" }
  ];

  return (
    <Layout>
      <div className="min-h-screen" ref={sectionRef}>
      <SEO
        title="About Us - Our Story & Team"
        description="Learn about Elegant Tiles & Decor's journey, our expert team, and commitment to transforming spaces with affordable elegance since 2010."
        keywords="about elegant tiles, interior design company Kenya, design team, company history, awards"
      />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Elevating Spaces, Redefining Luxury
              <span className="block text-primary">Since 2010</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that exceptional design should be accessible to all. 
              Our journey began with a simple yet powerful vision: to make luxury interior design 
              accessible to everyone while maintaining uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Crafting Dreams into
                <span className="block text-primary">Reality</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, our brand was built on a simple yet powerful vision: to make luxury interior design 
                  accessible to everyone. What started as a small tile showroom has grown into Kenya's 
                  premier destination for elegant home transformations, serving both residential and commercial clients
                  across Nairobi, Mombasa, and Kisumu.
                </p>
                
                <p>
                  Our journey began when our founder, inspired by the lack of affordable luxury options 
                  in the market, decided to bridge the gap between premium quality and reasonable pricing. 
                  Today, we've transformed over 150 spaces across Kenya, from private residences to boutique hotels, 
                  corporate offices to luxury villas.
                </p>
                
                <p>
                  We believe that every space has potential, and every client deserves excellence. 
                  Our team of expert designers and craftspeople work tirelessly to ensure that each 
                  project reflects our core values: quality, affordability, and timeless elegance that stands the test of time. 
                  We're not just transforming spaces - we're creating environments that inspire and elevate everyday living.
                </p>

                <p>
                  Our approach combines technical expertise with artistic vision. We don't just sell products - we create 
                  comprehensive design solutions that elevate spaces and enhance the way people live and work. 
                  From concept to completion, we partner with our clients to bring their visions to life through our 
                  signature process: Discovery, Design, Development, and Delivery.
                </p>
              </div>

              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
                  Start Your Project
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-luxury"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Our showroom and team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Journey Through
              <span className="block text-primary">The Years</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center relative ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.desc}
                      </p>
                      <div className="mt-2">
                        {milestone.details && (
                          <ul className="text-sm text-muted-foreground list-disc pl-5">
                            {milestone.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Collaborate With Our
              <span className="block text-primary">Award-Winning Design Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of designers and craftspeople bring years of experience 
              and creative vision to every project, combining technical expertise with artistic flair.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-6 shadow-card group-hover:shadow-luxury transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {member.experience}
                </p>

                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="mt-4">
                <div className="text-sm font-medium text-primary mb-2">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Redefine Your Space?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our design consultants are ready to help you create a space that reflects your unique style
              and meets your practical needs. Let's begin your transformation journey together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 border-white rounded-full px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white hover:bg-white/10 border-white rounded-full px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Design Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Awards &
              <span className="block text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and clients alike,
              with numerous awards and accolades for our innovative designs and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Kenya Design Award</h3>
                <p className="text-sm text-muted-foreground">2023</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our
              <span className="block text-primary">Design Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured yet flexible approach to ensure every project meets our high standards
              of excellence while addressing our clients' unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding your vision, needs, and budget through in-depth consultations"
              },
              {
                number: "02",
                title: "Design",
                desc: "Creating custom design concepts that blend aesthetics, functionality, and sustainability"
              },
              {
                number: "03",
                title: "Development",
                desc: "Selecting materials, coordinating with contractors, and managing timelines"
              },
              {
                number: "04",
                title: "Delivery",
                desc: "Executing the design with precision and ensuring complete client satisfaction"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Client
              <span className="block text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our valued clients about their experience working
              with our design team and the transformation we've brought to their spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial, index) => (
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
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "Elegant Tiles & Decor transformed our home beyond our wildest dreams. The attention to detail is extraordinary. 
                  From the initial consultation to the final installation, the entire process was seamless and stress-free."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Homeowner, Nairobi</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default About;