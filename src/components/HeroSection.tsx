import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Ontario Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Can I Buy A Home
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            In Ontario?
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Get your personalized home buying assessment and discover exclusive Ontario properties with 
          insider market insights. Our verified process has helped 1,000+ buyers secure their dream homes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-8 py-4 min-w-[250px]"
          >
            Create Account
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 min-w-[250px] border-white/30 text-white hover:bg-white/10"
          >
            View Latest Listings
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>No Fees or Obligations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>1000+ Satisfied Buyers</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};