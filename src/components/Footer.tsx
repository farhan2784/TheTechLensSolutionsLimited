import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import techLensLogo from "@/assets/techlens-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Cloud & DevOps", href: "#cloud" },
      { label: "Networking", href: "#networking" },
      { label: "Systems Integration", href: "#systems" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
    resources: [
      { label: "Case Studies", href: "#cases" },
      { label: "White Papers", href: "#papers" },
      { label: "Support", href: "#support" },
      { label: "Documentation", href: "#docs" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/thetechlens", label: "Twitter" },
    { icon: Github, href: "https://github.com/thetechlens", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/thetechlens", label: "LinkedIn" },
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
                alt="The TechLens Solutions" 
                className="h-20 w-20 md:h-24 md:w-24"
                loading="lazy"
                decoding="async"
              />
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-extrabold text-foreground">The</span>
                <span className="text-xl md:text-2xl font-extrabold tech-gradient bg-clip-text text-transparent">TechLens Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Your trusted partner for Infrastructure, Systems, Networking, Cloud & DevOps solutions. 
              Helping enterprises harness modern IT tools with precision and expertise.
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
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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
            © {currentYear} The TechLens. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Empowering enterprises with precision technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;