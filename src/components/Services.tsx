import { Server, Globe, Shield, Cloud, Code, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Infrastructure Solutions",
      description: "Robust, scalable infrastructure designed to grow with your business. From server architecture to data center optimization.",
      features: ["Server Management", "Data Center Design", "Hardware Optimization", "Performance Monitoring"],
      icon: Server,
      featured: true,
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      description: "Accelerate your development cycle with modern cloud infrastructure and automated deployment pipelines.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code"],
      icon: Cloud,
    },
    {
      id: 3,
      title: "Networking Solutions",
      description: "Secure, high-performance network architecture that connects your business operations seamlessly.",
      features: ["Network Design", "Security Implementation", "Load Balancing", "VPN Solutions"],
      icon: Globe,
    },
    {
      id: 4,
      title: "Systems Integration",
      description: "Seamlessly integrate diverse systems and applications to create a unified, efficient IT ecosystem.",
      features: ["API Integration", "Legacy Modernization", "Database Migration", "System Optimization"],
      icon: Settings,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="tech-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Service */}
          {services
            .filter(service => service.featured)
            .map((service) => (
              <Card key={service.id} className="lg:col-span-2 card-gradient shadow-tech hover-lift group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="tech-gradient text-white">
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}

          {/* Regular Services */}
          {services
            .filter(service => !service.featured)
            .map((service, index) => (
              <Card key={service.id} className={`card-gradient shadow-tech hover-lift group cursor-pointer animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="hover-lift">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;