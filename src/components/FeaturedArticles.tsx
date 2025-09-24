import { Calendar, Clock, ArrowRight, Cpu, Smartphone, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of AI: Transforming Industries in 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare, finance, and manufacturing with real-world applications and emerging trends.",
      category: "Artificial Intelligence",
      author: "Alex Chen",
      date: "Sep 20, 2024",
      readTime: "8 min read",
      icon: Cpu,
      featured: true,
    },
    {
      id: 2,
      title: "5G Networks: Unlocking the Potential of IoT",
      excerpt: "Exploring how 5G technology is enabling smart cities, autonomous vehicles, and the next generation of connected devices.",
      category: "Networking",
      author: "Sarah Johnson",
      date: "Sep 18, 2024",
      readTime: "6 min read",
      icon: Globe,
    },
    {
      id: 3,
      title: "Quantum Computing Breakthroughs in 2024",
      excerpt: "Latest developments in quantum computing and their implications for cryptography, drug discovery, and financial modeling.",
      category: "Quantum Tech",
      author: "Dr. Michael Park",
      date: "Sep 15, 2024",
      readTime: "10 min read",
      icon: Zap,
    },
    {
      id: 4,
      title: "Mobile App Development: React Native vs Flutter",
      excerpt: "A comprehensive comparison of the two leading cross-platform frameworks, including performance benchmarks and use cases.",
      category: "Mobile Dev",
      author: "Emma Rodriguez",
      date: "Sep 12, 2024",
      readTime: "7 min read",
      icon: Smartphone,
    },
  ];

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="tech-gradient bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and breakthroughs in technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          {articles
            .filter(article => article.featured)
            .map((article) => (
              <Card key={article.id} className="lg:col-span-2 card-gradient shadow-tech hover-lift group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="tech-gradient text-white">
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <article.icon className="h-5 w-5 text-primary" />
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">by {article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}

          {/* Regular Articles */}
          {articles
            .filter(article => !article.featured)
            .map((article, index) => (
              <Card key={article.id} className={`card-gradient shadow-tech hover-lift group cursor-pointer animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <article.icon className="h-4 w-4 text-primary" />
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-muted-foreground">by {article.author}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="hover-lift">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;