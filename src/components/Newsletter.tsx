import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to The Tech Lens newsletter.",
      });
    }, 1000);
  };

  const benefits = [
    "Weekly tech insights delivered to your inbox",
    "Exclusive access to premium content",
    "Early notifications on new articles",
    "Curated tech news and trends",
  ];

  return (
    <section id="newsletter" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient shadow-tech hover-lift">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8 animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full tech-gradient">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Stay <span className="tech-gradient bg-clip-text text-transparent">Informed</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join thousands of tech enthusiasts who trust The Tech Lens for the latest 
                  insights, trends, and breakthroughs in technology.
                </p>
              </div>

              {!isSubscribed ? (
                <div className="animate-slide-up">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="tech-gradient hover:shadow-glow">
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </Button>
                  </form>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-3 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full tech-gradient"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center animate-fade-in">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Welcome aboard!</h3>
                  <p className="text-muted-foreground">
                    You've successfully subscribed to The Tech Lens newsletter. 
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              )}

              <div className="text-center mt-8">
                <p className="text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;