import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SEO from "@/components/SEO";
import Portfolio from "@/components/Portfolio";
import Layout from "@/components/Layout";

const PortfolioPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <Layout>
      <div className="min-h-screen" ref={sectionRef}>
      <SEO
        title="Project Portfolio & Transformations"
        description="Explore our award-winning interior design projects. Before & after transformations showcasing luxury tile installations and elegant interior design."
        keywords="interior design portfolio, before after gallery, luxury tile projects, home transformations, commercial design gallery"
      />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Project Portfolio
              <span className="block text-primary">& Transformations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed ordinary spaces into extraordinary experiences. 
              Each project showcases our commitment to affordable elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />
      </div>
    </Layout>
  );
};

export default PortfolioPage;