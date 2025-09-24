import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence-Driven",
      description: "Delivering solutions with precision and quality",
    },
    {
      icon: Award,
      title: "Enterprise Focus",
      description: "Specialized in large-scale business solutions",
    },
    {
      icon: TrendingUp,
      title: "Innovation-Led",
      description: "Leveraging cutting-edge technologies",
    },
    {
      icon: Users,
      title: "Partnership-Based",
      description: "Building long-term client relationships",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="tech-gradient bg-clip-text text-transparent">The TechLens</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're your trusted technology partner, dedicated to transforming businesses through 
              innovative IT solutions. With expertise spanning infrastructure, cloud, networking, 
              and DevOps, we deliver precision-engineered solutions that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To empower enterprises with cutting-edge technology solutions that drive productivity, 
                enable scalability, and ensure seamless operations. We bridge the gap between complex 
                technology and business success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From infrastructure design to cloud migration, from network security to DevOps 
                automation, we deliver comprehensive solutions with precision and reliability 
                that enterprises trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {values.map((value, index) => (
                <Card key={value.title} className="card-gradient shadow-tech hover-lift group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Stats */}
          <div className="bg-muted/30 rounded-2xl p-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;