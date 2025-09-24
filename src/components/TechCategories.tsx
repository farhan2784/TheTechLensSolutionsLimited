import { Cpu, Smartphone, Globe, Database, Shield, Zap, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechCategories = () => {
  const categories = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Neural Networks",
      count: 42,
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS, Android, React Native, Flutter",
      count: 28,
      color: "text-green-500",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Frontend, Backend, Full-Stack Development",
      count: 35,
      color: "text-purple-500",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Big Data, Analytics, Data Visualization",
      count: 19,
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security Protocols, Encryption, Privacy",
      count: 24,
      color: "text-red-500",
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Quantum Algorithms, Hardware, Applications",
      count: 15,
      color: "text-yellow-500",
    },
    {
      icon: Code,
      title: "DevOps & Cloud",
      description: "CI/CD, Containerization, Infrastructure",
      count: 31,
      color: "text-cyan-500",
    },
    {
      icon: Rocket,
      title: "Emerging Tech",
      description: "AR/VR, Blockchain, IoT, Edge Computing",
      count: 22,
      color: "text-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore <span className="tech-gradient bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the technologies that are shaping our future
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient shadow-tech hover-lift group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-muted/50 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-sm font-medium text-primary">
                  {category.count} articles
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCategories;