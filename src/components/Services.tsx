import { useState } from "react";
import { 
  Home, 
  Building, 
  Church, 
  TreePine, 
  Hammer, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesImages } from "@/assets/imageAssets";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your home into a luxurious sanctuary with our expert residential design services.",
      features: [
        "Complete home makeovers",
        "Kitchen & bathroom renovations", 
        "Living room & bedroom design",
        "Custom furniture selection",
        "Color scheme consultation"
      ],
      image: servicesImages.residentialDesign,
      price: "Starting from KES 150,000",
      duration: "4-8 weeks"
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Create impressive commercial environments that reflect your brand and inspire productivity.",
      features: [
        "Office space planning",
        "Reception area design",
        "Conference room setup",
        "Retail space optimization",
        "Brand-aligned aesthetics"
      ],
      image: servicesImages.commercialDesign,
      price: "Starting from KES 300,000",
      duration: "6-12 weeks"
    },
    {
      icon: Church,
      title: "Worship Spaces",
      description: "Design sacred spaces that inspire reverence and create meaningful spiritual experiences.",
      features: [
        "Sanctuary design",
        "Altar & pulpit area",
        "Seating arrangement",
        "Acoustic optimization",
        "Lighting for ambiance"
      ],
      image: servicesImages.hospitalityDesign,
      price: "Starting from KES 500,000",
      duration: "8-16 weeks"
    },
    {
      icon: TreePine,
      title: "Outdoor Spaces",
      description: "Extend your living space outdoors with beautifully designed patios, gardens, and landscapes.",
      features: [
        "Patio & deck design",
        "Garden landscaping",
        "Outdoor kitchen setup",
        "Pool area design",
        "Lighting & irrigation"
      ],
      image: servicesImages.consultation,
      price: "Starting from KES 200,000",
      duration: "3-6 weeks"
    },
    {
      icon: Hammer,
      title: "Complete Renovations",
      description: "Full-scale renovation projects from concept to completion with our turnkey solutions.",
      features: [
        "Structural modifications",
        "Electrical & plumbing",
        "Complete interior overhaul",
        "Project management",
        "Quality assurance"
      ],
      image: servicesImages.residentialDesign,
      price: "Starting from KES 800,000",
      duration: "12-24 weeks"
    }
  ];

  const currentService = services[activeService];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Professional Services</span>
          </div>
          
          <h2 className="text-elegant mb-6">
            Professional Design
            <span className="block text-primary mt-2">& Installation Services</span>
          </h2>
          
          <p className="text-luxury max-w-3xl mx-auto">
            From premium tile installation to complete interior transformations, our expert team delivers 
            exceptional design solutions that combine luxury aesthetics with affordable elegance.
          </p>
        </div>

        {/* Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "bg-primary text-white shadow-luxury"
                    : "bg-white hover:bg-primary/5 shadow-card"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    activeService === index ? "bg-white/20" : "bg-primary/10"
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      activeService === index ? "text-white" : "text-primary"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-display font-semibold mb-2 ${
                      activeService === index ? "text-white" : "text-foreground"
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed ${
                      activeService === index ? "text-white/90" : "text-muted-foreground"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                  
                  <ArrowRight className={`h-5 w-5 transition-transform ${
                    activeService === index 
                      ? "text-white rotate-90" 
                      : "text-muted-foreground"
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="card-elegant p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-display font-semibold text-foreground mb-4">
                {currentService.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                  <p className="font-semibold text-primary">{currentService.price}</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="font-semibold text-primary">{currentService.duration}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-luxury flex-1">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Play className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-elegant mb-4">
              Our Design
              <span className="block text-primary mt-2">Process</span>
            </h3>
            
            <p className="text-luxury max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project exceeds expectations 
              from initial consultation to final reveal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating detailed plans and 3D visualizations" },
              { step: "03", title: "Implementation", desc: "Expert execution with premium materials" },
              { step: "04", title: "Reveal", desc: "Final walkthrough and project completion" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                
                <h4 className="text-xl font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;