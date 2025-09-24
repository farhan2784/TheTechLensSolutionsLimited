import { Building2, Factory, ShoppingCart, Heart, GraduationCap, Scale, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Scalable IT infrastructure for large organizations",
      stats: "500+ Employees",
      color: "text-blue-500",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial IoT and automation solutions",
      stats: "99.9% Uptime",
      color: "text-orange-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "High-performance platforms for online retail",
      stats: "Peak Traffic Ready",
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems and data security",
      stats: "Regulatory Compliant",
      color: "text-red-500",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management and campus-wide networks",
      stats: "Cloud-Based",
      color: "text-purple-500",
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Secure document management and compliance",
      stats: "Data Protection",
      color: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "High-security trading and banking systems",
      stats: "Bank-Grade Security",
      color: "text-cyan-500",
    },
    {
      icon: Users,
      title: "Startups",
      description: "Cost-effective solutions that scale with growth",
      stats: "Growth-Ready",
      color: "text-pink-500",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Industry <span className="tech-gradient bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored technology solutions for every industry vertical
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title} 
              className="card-gradient shadow-tech hover-lift group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-muted/50 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className={`h-8 w-8 ${solution.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {solution.description}
                </p>
                <div className="text-sm font-medium text-primary">
                  {solution.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-tech">
            <h3 className="text-2xl font-bold mb-4">
              Need a <span className="tech-gradient bg-clip-text text-transparent">Custom Solution</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Our team works closely with you to design and implement 
              solutions that perfectly match your specific requirements and goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent mb-2">01</div>
                <div className="text-sm font-medium mb-1">Discovery</div>
                <div className="text-xs text-muted-foreground">Understand your needs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent mb-2">02</div>
                <div className="text-sm font-medium mb-1">Design</div>
                <div className="text-xs text-muted-foreground">Create tailored solution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent mb-2">03</div>
                <div className="text-sm font-medium mb-1">Deploy</div>
                <div className="text-xs text-muted-foreground">Implement with precision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;