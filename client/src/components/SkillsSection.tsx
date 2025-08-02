import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, pulseAnimation, rotateAnimation } from "../lib/motion";
import { skillCategories, allSkills } from "../lib/data";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, Star, RotateCw } from "lucide-react";
import SkillOrbit from "./effects/SkillOrbit";
import ErrorBoundary from "./ErrorBoundary";
import FloatingShapes from "./effects/FloatingShapes";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentOrbitCategory, setCurrentOrbitCategory] = useState(0);
  const [orbitMode, setOrbitMode] = useState<"category" | "all">("category");
  const [currentSkillset, setCurrentSkillset] = useState<string[]>([]);

  const featuredSkills = useMemo(() =>
    skillCategories.flatMap(cat => cat.skills).filter(skill => skill.featured).map(skill => skill.name),
    []
  );

  const filteredSkills = useMemo(() => {
    let skills = activeCategory
      ? skillCategories.find(cat => cat.name === activeCategory)?.skills.map(s => s.name) || []
      : allSkills;

    if (searchTerm) {
      skills = skills.filter(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return skills;
  }, [searchTerm, activeCategory]);

  // Update current skillset for orbit
  useEffect(() => {
    if (orbitMode === "all") {
      setCurrentSkillset(allSkills);
    } else {
      setCurrentSkillset(skillCategories[currentOrbitCategory]?.skills.map(s => s.name) || []);
    }
  }, [orbitMode, currentOrbitCategory]);

  const handleCategoryChange = () => {
    if (orbitMode === "all") {
      // Switch to category mode
      setOrbitMode("category");
    } else {
      // Rotate through categories
      setCurrentOrbitCategory((prev) => (prev + 1) % skillCategories.length);
    }
  };

  const toggleOrbitMode = () => {
    setOrbitMode(prev => prev === "category" ? "all" : "category");
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative"
    >
      <FloatingShapes />
      <div className="section-container relative z-10">
        <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-responsive-xl font-bold font-poppins text-center mb-6"
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p
             variants={fadeIn("up", "tween", 0.2, 1)}
             className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          >
            A curated list of my technical abilities. Click the central sphere to cycle through categories or use the filters to explore my skills.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="lg:col-span-1 h-80 border border-muted rounded-md overflow-hidden relative"
              style={{ minHeight: "400px" }}
            >
              {/* Orbit mode toggle button */}
              <motion.div 
                className="absolute top-2 right-2 z-10"
                whileHover={{ scale: 1.1 }}
              >
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="rounded-full w-8 h-8 p-0 bg-black/20 backdrop-blur-sm" 
                  onClick={toggleOrbitMode}
                  title={orbitMode === "category" ? "Show all skills" : "Show by category"}
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </motion.div>
              
              {/* Current category indicator */}
              <AnimatePresence>
                {orbitMode === "category" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-2 left-2 z-10"
                  >
                    <Badge variant="outline" className="bg-black/20 backdrop-blur-sm">
                      {skillCategories[currentOrbitCategory]?.name || "Skills"}
                    </Badge>
                  </motion.div>
                )}
                {orbitMode === "all" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-2 left-2 z-10"
                  >
                    <Badge variant="outline" className="bg-black/20 backdrop-blur-sm">
                      All Skills
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Error boundary for SkillOrbit */}
              <ErrorBoundary fallback={<div className="h-full flex items-center justify-center">Failed to load 3D visualization</div>}>
                <SkillOrbit 
                  skills={currentSkillset}
                  onCategoryChange={handleCategoryChange}
                  color={orbitMode === "category" ? skillCategories[currentOrbitCategory]?.color || "#3b82f6" : "#8b5cf6"}
                />
              </ErrorBoundary>
            </motion.div>            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="lg:col-span-2"
            >
              <div className="modern-card p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search skills..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant={activeCategory ? "outline" : "default"} onClick={() => setActiveCategory(null)}>All Skills</Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {skillCategories.map(cat => (
                    <Button
                      key={cat.name}
                      variant={activeCategory === cat.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                  {filteredSkills.map(skill => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="text-sm py-1.5 px-3 flex items-center gap-2">
                        {skill}
                        {featuredSkills.includes(skill) && <Star className="text-yellow-400" />}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;