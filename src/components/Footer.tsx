import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import techLensLogo from "@/assets/tech-lens-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    content: [
      { label: "Articles", href: "#articles" },
      { label: "Categories", href: "#categories" },
      { label: "Archive", href: "#archive" },
      { label: "RSS Feed", href: "#rss" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
    resources: [
      { label: "Newsletter", href: "#newsletter" },
      { label: "Tech News", href: "#news" },
      { label: "Guides", href: "#guides" },
      { label: "Tools", href: "#tools" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@thetechlens.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={techLensLogo} 
                alt="The Tech Lens" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tech-gradient bg-clip-text text-transparent">
                The Tech Lens
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Exploring the cutting-edge of technology, innovation, and digital transformation. 
              Your trusted source for tech insights that matter.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover-lift"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary tech-link text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary tech-link text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary tech-link text-sm transition-colors flex items-center"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} The Tech Lens. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ for tech enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;