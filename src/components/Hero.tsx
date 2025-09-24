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
            Through the
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-tech-glow">
              Tech Lens
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the cutting-edge of technology, innovation, and digital transformation. 
            Stay ahead with insights that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="tech-gradient"
              className="hover-lift group"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/10 hover-lift"
            >
              Subscribe Newsletter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Eye className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-white/70 text-sm">Monthly Readers</div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-accent-glow" />
              </div>
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-white/70 text-sm">Tech Articles</div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-lift">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-white/70 text-sm">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;