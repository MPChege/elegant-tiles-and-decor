import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-primary/5">
      <div className="text-center p-8">
        <div className="text-8xl font-display font-bold text-primary mb-4 animate-scale-in">
          404
        </div>
        
        <h1 className="text-3xl font-display font-semibold text-foreground mb-4 animate-fade-in">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto animate-fade-in">
          The page you're looking for doesn't exist. It might have been moved, deleted, 
          or you entered the wrong URL.
        </p>
        
        <a 
          href="/" 
          className="btn-luxury inline-flex items-center animate-fade-in"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
