import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        document.documentElement.style.setProperty('--nav-height', '56px');
      } else {
        setIsScrolled(false);
        document.documentElement.style.setProperty('--nav-height', '72px');
      }
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
    document.documentElement.style.setProperty('--nav-height', '72px');
    
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
    // Add a small delay to allow smooth scrolling after closing the menu
    setTimeout(() => {
      // Nothing extra needed here, just the delay
    }, 100);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed w-full z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 border-b border-border/30 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-poppins gradient-text">
            Faizan.dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition duration-300"
              >
                {link.name}
              </a>
            ))}
                  <div className="py-2 px-4">
                    <ThemeToggle />
                  </div>
          </div>

          {/* Mobile Navigation Toggle and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#6366F1]" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card fixed top-[calc(var(--nav-height,60px))] left-0 right-0 z-40 shadow-lg border-t border-border"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition duration-300 py-2 px-4 rounded-lg hover:bg-background/40 font-medium"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
