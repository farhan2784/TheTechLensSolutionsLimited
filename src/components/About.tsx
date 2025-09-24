import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Democratizing tech knowledge for everyone",
    },
    {
      icon: Award,
      title: "Expert Insights",
      description: "Content from industry professionals",
    },
    {
      icon: TrendingUp,
      title: "Future-Focused",
      description: "Covering emerging technologies and trends",
    },
    {
      icon: Users,
      title: "Community-First",
      description: "Building connections in the tech world",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="tech-gradient bg-clip-text text-transparent">The Tech Lens</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about making complex technology accessible to everyone. 
              Through in-depth analysis, expert insights, and practical guides, we help you 
              navigate the ever-evolving tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In a world where technology evolves at breakneck speed, staying informed 
                is crucial. The Tech Lens serves as your guide through the digital revolution, 
                offering clarity in complexity and insight into innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From artificial intelligence to quantum computing, from mobile development 
                to cybersecurity, we cover the full spectrum of technology with depth, 
                accuracy, and accessibility.
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

          {/* Team Stats */}
          <div className="bg-muted/30 rounded-2xl p-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-muted-foreground">Articles Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-muted-foreground">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;