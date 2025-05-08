import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { projects } from "../lib/data";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-3xl font-bold font-poppins text-center mb-16"
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
              className="bg-[#2D2D2D] rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold font-poppins">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#6366F1]">{project.period}</span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-6">{project.additionalInfo}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#1A1A1A] rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6366F1] hover:underline"
                    >
                      Live Link <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6366F1] hover:underline"
                    >
                      GitHub Repo <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="px-6 py-3 border border-[#6366F1] text-[#6366F1] font-medium rounded-lg hover:bg-[#6366F1] hover:bg-opacity-10 transition duration-300"
          >
            View All Projects <ArrowRight className="inline ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
