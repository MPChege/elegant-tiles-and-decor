import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
// Lazy load other pages
import { lazy, Suspense } from "react";

// Create a loading component for lazy loading
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Lazy load all pages except the main index page
const Products = lazy(() => import("./pages/Products"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ConsultationBooking = lazy(() => import("./pages/ConsultationBooking"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={
              <Suspense fallback={<LoadingComponent />}>
                <Products />
              </Suspense>
            } />
            <Route path="/services" element={
              <Suspense fallback={<LoadingComponent />}>
                <ServicesPage />
              </Suspense>
            } />
            <Route path="/portfolio" element={
              <Suspense fallback={<LoadingComponent />}>
                <Portfolio />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingComponent />}>
                <About />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingComponent />}>
                <Contact />
              </Suspense>
            } />
            <Route path="/consultation" element={
              <Suspense fallback={<LoadingComponent />}>
                <ConsultationBooking />
              </Suspense>
            } />
            <Route path="/search" element={
              <Suspense fallback={<LoadingComponent />}>
                <SearchPage />
              </Suspense>
            } />
            <Route path="/wishlist" element={
              <Suspense fallback={<LoadingComponent />}>
                <WishlistPage />
              </Suspense>
            } />
            <Route path="/cart" element={
              <Suspense fallback={<LoadingComponent />}>
                <CartPage />
              </Suspense>
            } />
            <Route path="/profile" element={
              <Suspense fallback={<LoadingComponent />}>
                <ProfilePage />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <Suspense fallback={<LoadingComponent />}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;