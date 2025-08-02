import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUp, Mail, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useIsMobile();

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update navbar state based on scroll position
      if (scrollTop > 100) {
        setIsScrolled(true);
        document.documentElement.style.setProperty('--nav-height', '64px');
      } else {
        setIsScrolled(false);
        document.documentElement.style.setProperty('--nav-height', '80px');
      }

      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollTop >= sectionTop - 100 && scrollTop < sectionTop + sectionHeight - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    // Show/hide back to top button
    const handleBackToTop = () => {
      const backToTopButton = document.getElementById("backToTop");
      if (window.scrollY > 500) {
        backToTopButton?.classList.add("opacity-100");
        backToTopButton?.classList.remove("opacity-0", "invisible");
      } else {
        backToTopButton?.classList.add("opacity-0", "invisible");
        backToTopButton?.classList.remove("opacity-100");
      }
    };

    // Initial setting of nav height
    document.documentElement.style.setProperty('--nav-height', '80px');
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleBackToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleBackToTop);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 glass-card shadow-lg backdrop-blur-md" 
            : "py-5 bg-background/80 backdrop-blur-sm"
        } border-b border-border/30`}
      >
        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-bold font-poppins gradient-text hover:scale-105 transition-transform duration-300"
              onClick={scrollToTop}
            >
              Faizan.dev
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-foreground hover:text-primary transition-all duration-300 font-medium group ${
                    activeSection === link.href.substring(1) ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full ${
                    activeSection === link.href.substring(1) ? 'w-full' : ''
                  }`} />
                </a>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-3">                
                <a href="https://linkedin.com/in/pathan-mo-faizan-khan" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="btn-primary"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </a>
                
                <div className="pl-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Mobile Navigation Toggle and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-muted transition-colors duration-300 relative z-50"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-primary" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-[calc(var(--nav-height,80px))] left-0 right-0 z-40 glass-card border-t border-border/30"
          >
            <div className="section-container py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 font-medium text-lg relative group ${
                      activeSection === link.href.substring(1) ? 'text-primary bg-primary/10' : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />
                  </motion.a>
                ))}
                
                {/* Mobile Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="flex flex-col space-y-3 pt-4 border-t border-border/30"
                >                  
                  <a href="https://linkedin.com/in/pathan-mo-faizan-khan" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                    <Button className="btn-primary w-full">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 opacity-0 invisible transition-all duration-300 p-3 glass-card rounded-full hover:scale-110 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-primary group-hover:animate-bounce" />
      </button>
    </>
  );
};

export default Navbar;
