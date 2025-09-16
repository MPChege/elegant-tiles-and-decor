import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const milestones = [
    { year: "2010", title: "Founded", desc: "Started with a vision of affordable elegance" },
    { year: "2015", title: "Expansion", desc: "Opened second showroom in Nairobi" },
    { year: "2018", title: "Recognition", desc: "Won Kenya Interior Design Award" },
    { year: "2020", title: "Digital Growth", desc: "Launched online platform" },
    { year: "2023", title: "Premium Line", desc: "Introduced luxury tile collection" },
    { year: "2024", title: "150+ Projects", desc: "Milestone achievement in transformations" }
  ];

  const team = [
    {
      name: "Sarah Wanjiku",
      role: "Creative Director",
      image: "/api/placeholder/300/300",
      experience: "12+ years"
    },
    {
      name: "Michael Ochieng",
      role: "Lead Designer",
      image: "/api/placeholder/300/300",
      experience: "8+ years"
    },
    {
      name: "Grace Muthoni",
      role: "Project Manager",
      image: "/api/placeholder/300/300",
      experience: "10+ years"
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
              Our Story of
              <span className="block text-primary">Elegant Transformations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over a decade, we've been transforming spaces across Kenya with our commitment 
              to affordable elegance, premium quality, and exceptional craftsmanship.
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
                  Founded in 2010 with a simple yet powerful vision: to make luxury interior design 
                  accessible to everyone. What started as a small tile showroom has grown into Kenya's 
                  premier destination for elegant home transformations.
                </p>
                
                <p>
                  Our journey began when our founder, inspired by the lack of affordable luxury options 
                  in the market, decided to bridge the gap between premium quality and reasonable pricing. 
                  Today, we've transformed over 150 spaces across Kenya.
                </p>
                
                <p>
                  We believe that every space has potential, and every client deserves excellence. 
                  Our team of expert designers and craftspeople work tirelessly to ensure that each 
                  project reflects our core values: quality, affordability, and timeless elegance.
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
                src="/api/placeholder/600/450"
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
                  className={`flex items-center ${
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
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
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
              Meet Our Expert
              <span className="block text-primary">Design Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of designers and craftspeople bring years of experience 
              and creative vision to every project.
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
              Ready to Transform Your Space?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something beautiful together. 
              Our team is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 border-white rounded-full px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white hover:bg-white/10 border-white rounded-full px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default About;