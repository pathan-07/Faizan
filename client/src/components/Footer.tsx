import React from "react";
import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold font-poppins gradient-text">
              Faizan.dev
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-primary transition duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition duration-300"
            >
              Contact
            </a>
          </div>

          <div>
            <p className="text-muted-foreground">
              &copy; {currentYear} Pathan Mo. Faizan Khan. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
