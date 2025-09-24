import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import TechCategories from "@/components/TechCategories";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedArticles />
      <TechCategories />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
