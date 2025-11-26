import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { projects } from "../lib/data";
import { Project } from "../lib/types";
import { ArrowUpRight, Github, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Immersive Project Card Component
const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer"
    onClick={onOpen}
  >
    {/* Background Image with Zoom Effect */}
    <div className="absolute inset-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 backdrop-blur-md">
              {project.category}
            </Badge>
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-1">
              {project.title}
            </h3>
          </div>
          <div className="p-2 rounded-full bg-foreground/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-muted-foreground bg-background/30 px-2 py-1 rounded-md backdrop-blur-sm border border-border/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Project Detail Modal Component (Kept mostly same but refined style)
const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-border bg-background/95 backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          <div className="relative h-64 lg:h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent lg:hidden" />
          </div>

          <div className="p-6 lg:p-10 flex flex-col h-full overflow-y-auto custom-scrollbar">
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  {project.category}
                </Badge>
              </div>
              <DialogTitle className="text-3xl md:text-4xl font-bold font-poppins mb-4 leading-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-8 flex-grow">
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">Key Features</h4>
                <ul className="grid gap-3">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-6 border-t border-border">
              {project.liveLink && project.liveLink !== "#" && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full btn-primary h-12">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full btn-outline h-12">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main Projects Section Component
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-background relative">
      <div className="container relative z-10">
        <motion.div variants={staggerContainer(0.1, 0.2)} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.h2
                variants={fadeIn("up", "tween", 0.1, 1)}
                className="text-4xl md:text-6xl font-bold font-poppins mb-6"
              >
                Selected <span className="gradient-text">Works</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-muted-foreground text-lg"
              >
                Explore a collection of projects that showcase my passion for design and development.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="flex flex-wrap gap-2"
            >
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  onOpen={() => setSelectedProject(project)} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;