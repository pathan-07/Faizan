import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../lib/data";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { fadeIn, staggerContainer } from "../lib/motion";

const SkillsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = useMemo(() => {
    return skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.name
      }))
    );
  }, []);

  const categories = useMemo(() => ["All", ...skillCategories.map(c => c.name)], []);

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, skills]);

  return (
    <section id="skills" className="section-padding bg-background relative">
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-4xl font-bold font-poppins">
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-muted-foreground text-lg">
              A comprehensive overview of my technical expertise and tools I use.
            </motion.p>
          </div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-1.5 text-sm hover:bg-primary/20 transition-colors"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="modern-card p-4 flex items-center gap-3 group hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <div className="w-5 h-5 font-bold text-xs flex items-center justify-center">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No skills found matching your criteria.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;