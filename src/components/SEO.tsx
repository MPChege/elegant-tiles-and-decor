import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  image?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Elegant Tiles & Decor - Affordable Elegance in Interior Design",
  description = "Transform your space with premium tiles, luxury finishes & expert interior design. Quality products, professional installation, affordable elegance across Kenya.",
  keywords = "tiles Kenya, interior design, luxury tiles, marble tiles, ceramic tiles, flooring, wall tiles, bathroom tiles, kitchen tiles, home decor",
  canonical,
  type = "website",
  image = "/logo.png",
  schema
}) => {
  const fullTitle = title.includes("Elegant Tiles") ? title : `${title} | Elegant Tiles & Decor`;
  
  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elegant Tiles & Decor",
    "description": description,
    "url": "https://www.eleganttilesdecor.com",
    "telephone": "+254-700-000-000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Westlands, Nairobi",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "openingHours": ["Mo-Sa 08:00-18:00"],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Elegant Tiles & Decor" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Elegant Tiles & Decor" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;