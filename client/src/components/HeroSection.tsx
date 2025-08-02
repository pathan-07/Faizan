import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Calendar, ChevronDown, Sparkles, Code, Brain, Rocket, Briefcase } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/motion";
import ParticleBackground from "./effects/ParticleBackground";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();

  const roles = [
    "Computer Science Student",
    "AI & ML Enthusiast", 
    "Web Developer",
    "Tech Innovator",
    "Problem Solver",
    "Open Source Contributor"
  ];

  const stats = [
    { label: "Years Learning", value: "3+", icon: Calendar },
    { label: "Internships", value: "3", icon: Briefcase },
    { label: "Projects", value: "3+", icon: Code },
    { label: "Skills", value: "25+", icon: Brain }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/pathan-07", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/pathan-mo-faizan-khan", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "pathanfaizankhan0123@gmail.com", color: "hover:text-primary" }
  ];

  // Auto-type effect for roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Floating animation for elements
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ParticleBackground
          count={120}
          colors={["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981"]}
          opacity={0.4}
          speed={0.5}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-creative/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="section-container relative z-10 pt-20">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]"
        >
          {/* Content Section */}
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="lg:col-span-7 space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Badge variant="outline" className="px-3 py-1.5 border-primary/30 text-primary bg-primary/5">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for opportunities
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Gujarat, India</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight"
              >
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block gradient-text">Faizan Khan</span>
              </motion.h1>

              {/* Dynamic Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
              >
                <span>I'm a </span>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl"
            >
              Currently pursuing B.E. in Computer Science with hands-on experience in 
              <span className="text-accent font-medium"> AI/ML</span>, 
              <span className="text-primary font-medium"> web Developer</span>, and 
              <span className="text-creative font-medium"> innovative tech solutions</span> through 
              multiple prestigious internships.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact">
                <Button size="lg" className="btn-primary group">
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Let's Connect
                </Button>
              </a>

              <a href="#projects">
                <Button size="lg" variant="ghost" className="hover:bg-muted group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View Projects
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-6"
            >
              <span className="text-muted-foreground text-sm">Connect with me:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg glass-card transition-colors duration-300 ${social.color}`}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                animate={controls}
                className="relative group"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-creative rounded-full blur-2xl opacity-20 animate-pulse" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full glass-card rounded-full p-2 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/assets/images/profile-photo.jpg"
                      alt="Pathan Mo. Faizan Khan"
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-full" />
                    
                    {/* Border Animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-tr from-primary via-accent to-creative bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300"
                >
                  <Code className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300"
                >
                  <Brain className="w-8 h-8 text-accent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                  className="absolute top-1/2 -right-12 glass-card p-3 rounded-xl"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Internships</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Only visible on larger screens and positioned to avoid overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-40"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-300"
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
