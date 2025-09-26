import { ArrowRight, Zap, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTechBg from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroTechBg} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-tech-glow">
              Focused on Tomorrow's Technology, Today
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Helping enterprises harness modern IT tools to increase productivity, scale with agility, and operate seamlessly.
          </p>
          
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Your trusted partner for Infrastructure, Systems, Networking, Cloud & DevOps solutions — delivered with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="tech-gradient"
              className="hover-lift group"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/10 hover-lift"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Eye className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-white/70 text-sm">Enterprise Clients</div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-accent-glow" />
              </div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-white/70 text-sm">Uptime Guarantee</div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator removed to avoid overlap */}
    </section>
  );
};

export default Hero;