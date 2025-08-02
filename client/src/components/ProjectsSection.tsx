import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { projects } from "../lib/data";
import { Project } from "../lib/types";
import { ArrowRight, Github, ExternalLink, X, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import FloatingShapes from "./effects/FloatingShapes";

// Project Card Component
const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className={`group modern-card flex flex-col overflow-hidden relative ${project.featured ? 'md:col-span-2' : ''}`}
  >
    {project.featured && <Badge className="absolute top-4 right-4 z-10">Featured</Badge>}
    <div className="overflow-hidden h-56">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
        ))}
      </div>
      <Button onClick={onOpen} variant="outline" className="mt-auto w-full">
        View Details <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </motion.div>
);

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8 order-2 md:order-1">
            <DialogHeader>
              <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
              <DialogTitle className="text-2xl font-bold font-poppins">{project.title}</DialogTitle>
              <DialogDescription className="text-base pt-2">{project.description}</DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {project.liveLink && project.liveLink !== "#" && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full btn-primary"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="secondary" className="w-full"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                </a>
              )}
            </div>
          </div>
          <div className="order-1 md:order-2">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover md:rounded-r-lg" />
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
    <section id="projects" ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-muted/20 relative">
      <FloatingShapes />
      <div className="section-container relative z-10">
        <motion.div variants={staggerContainer(0.1, 0.2)} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-responsive-xl font-bold font-poppins text-center mb-6">
            <span className="gradient-text">My Work & Projects</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Use the filters to navigate through different categories of my work.
          </motion.p>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <ProjectCard key={project.title} project={project} onOpen={() => setSelectedProject(project)} />
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