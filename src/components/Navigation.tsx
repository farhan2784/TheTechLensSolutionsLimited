import { useState } from "react";
import { Menu, X, Search, BookOpen, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import techLensLogo from "@/assets/tech-lens-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#articles", label: "Articles", icon: BookOpen },
    { href: "#about", label: "About", icon: Users },
    { href: "#newsletter", label: "Newsletter", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={techLensLogo} 
              alt="The Tech Lens" 
              className="h-8 w-8 animate-float"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Tech Lens
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary tech-link transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <Button 
              size="sm" 
              variant="tech-gradient"
              className="hover:shadow-glow"
            >
              <Search className="h-4 w-4 mr-1" />
              Search
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary py-2 tech-link transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <Button size="sm" variant="tech-gradient" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;