import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import ParticleBackground from "./effects/ParticleBackground";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <ParticleBackground
        count={150}
        colors={["#6366F1", "#8B5CF6", "#34D399"]}
        opacity={0.3}
        speed={0.3}
      />
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <span className="inline-block text-primary font-medium mb-2">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Pathan Mo. <span className="gradient-text">Faizan Khan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Computer Science Engineering Student & Tech Enthusiast
            </p>
            <p className="text-muted-foreground/80 mb-8 max-w-xl">
              Pursuing B.E. in Computer Science with experience in AI, web
              development, and innovative tech solutions through multiple
              internships.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:bg-opacity-10 transition duration-300"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-background to-muted p-1">
                <img
                  src="/assets/images/profile-photo.jpg"
                  alt="Pathan Mo. Faizan Khan"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay rounded-full"></div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-lg p-4 shadow-lg"
              >
                <span className="text-primary font-poppins font-bold text-lg">
                  3+ Internships
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-foreground opacity-70 hover:opacity-100 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
