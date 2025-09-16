import React, { useState, useEffect } from "react";
import EdwardMartinHero from "@/components/EdwardMartinHero";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import OptimizedCursorEffects from "@/components/OptimizedCursorEffects";
import ModernLoadingScreen from "@/components/ModernLoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      <SEO />
      <ModernLoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      <OptimizedCursorEffects />
      
      {showContent && (
        <div className="min-h-screen">
          <Header />
          <main>
            <EdwardMartinHero />
            <Categories />
            <ProductShowcase />
            <Services />
            <Portfolio />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
