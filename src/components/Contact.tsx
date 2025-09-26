import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 (346) 267-4952", "Mon-Fri 9AM-7PM PST"],
      action: "Schedule a call",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@thetechlens.com", "Response within 4 hours"],
      action: "Send email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Gulzar-e-Hijri Scheme 33", "Karachi"],
      action: "Get directions",
    },
  ];

  const benefits = [
    "Free consultation & assessment",
    "Custom solution architecture",
    "24/7 enterprise support",
    "Scalable implementation roadmap",
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get <span className="tech-gradient bg-clip-text text-transparent">In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your IT infrastructure? Let's discuss how we can help 
              your business achieve its technology goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="card-gradient shadow-tech hover-lift group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full tech-gradient">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-sm ${idx === 0 ? 'font-medium' : 'text-muted-foreground'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient shadow-tech">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Request a <span className="tech-gradient bg-clip-text text-transparent">Consultation</span>
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" variant="tech-gradient" className="w-full hover:shadow-glow">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center animate-fade-in">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. Our team will contact you within 24 hours 
                      to discuss your requirements.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Expected response: Within 24 hours</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose <span className="tech-gradient bg-clip-text text-transparent">The TechLens</span>?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're committed to delivering exceptional results through our comprehensive 
                  approach to enterprise technology solutions.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Card className="card-gradient p-6 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full tech-gradient">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Enterprise Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated account manager and 24/7 technical support
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;