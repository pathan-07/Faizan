import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { skillCategories, allSkills } from "../lib/data";
import FloatingSkillCube from "./effects/FloatingSkillCube";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
      // Animate skill progress bars
      const progressBars = document.querySelectorAll(".skill-progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        if (width) {
          (bar as HTMLElement).style.width = width;
        }
      });
    }
  }, [isInView, controls]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding gradient-bg"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          animate={controls}
          className="text-3xl font-bold font-poppins text-center mb-16"
        >
          <span className="gradient-text">Skills & Expertise</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeIn("up", "tween", 0.2 + categoryIndex * 0.1, 1)}
              className="bg-[#2D2D2D] rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold font-poppins">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar w-0"
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          animate={controls}
          className="mt-16"
        >
          <h3 className="text-xl font-bold font-poppins text-center mb-8">
            All Skills
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center mb-12">
            <div className="w-full md:w-1/3 h-64 mb-8 md:mb-0">
              <FloatingSkillCube skills={allSkills.slice(0, 6)} />
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap justify-center gap-3">
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm hover:bg-[#6366F1] hover:bg-opacity-20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
