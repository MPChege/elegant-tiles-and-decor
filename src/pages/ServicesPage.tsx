import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import Layout from "@/components/Layout";

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <Layout>
      <div className="min-h-screen" ref={sectionRef}>
      <SEO
        title="Professional Design & Installation Services"
        description="Expert interior design, tile installation, and renovation services across Kenya. Residential, commercial, and specialty project solutions."
        keywords="interior design Kenya, tile installation, home renovation, commercial design, luxury interiors, professional installation"
      />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Professional Design
              <span className="block text-primary">& Installation Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, our expert team delivers exceptional design solutions 
              that transform spaces with affordable elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Component */}
      <Services />
      </div>
    </Layout>
  );
};

export default ServicesPage;