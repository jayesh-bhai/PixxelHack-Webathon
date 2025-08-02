import { useState } from 'react';
import { Menu, X, Rocket, Satellite, Microscope, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import isroLogo from '@/assets/isro-logo.png';

interface NavbarProps {
  onLaunch: () => void;
}

const Navbar = ({ onLaunch }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Mission', icon: Rocket, href: '#mission' },
    { name: 'Satellite', icon: Satellite, href: '#satellite' },
    { name: 'Research', icon: Microscope, href: '#research' },
    { name: 'Teams', icon: Users, href: '#teams' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="animate-float">
              <img 
                src={isroLogo} 
                alt="ISRO Logo" 
                className="h-10 w-10 animate-glow rounded-full"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              ISRO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 group"
              >
                <item.icon className="w-5 h-5 group-hover:animate-rocket" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Launch Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onLaunch}
              className="bg-gradient-cosmic hover:scale-105 transition-transform duration-300 font-semibold"
            >
              🚀 Launch
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-accent transition-colors text-left"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;