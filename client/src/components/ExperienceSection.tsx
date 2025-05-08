import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { experiences } from "../lib/data";

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding gradient-bg"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-3xl font-bold font-poppins text-center mb-16"
        >
          <span className="gradient-text">Work Experience</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(
                index % 2 === 0 ? "right" : "left",
                "tween",
                0.2 + index * 0.1,
                1
              )}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg card-hover">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-poppins">
                    {experience.company}
                  </h3>
                  <span className="text-[#6366F1] text-sm">
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-lg mb-3 text-gray-300">
                  {experience.position}
                </h4>
                <p className="text-gray-400 mb-4">{experience.description}</p>

                {experience.highlights && (
                  <div className="mb-4">
                    <h5 className="font-medium mb-2 text-white">
                      Key Highlights:
                    </h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      {experience.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {experience.achievements && (
                  <div>
                    <h5 className="font-medium mb-2 text-white">
                      Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      {experience.achievements.map((achievement, aIndex) => (
                        <li key={aIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {experience.weeklyTasks && (
                  <div>
                    <h5 className="font-medium mb-2 text-white">
                      Weekly Challenges:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
                      {experience.weeklyTasks.map((task, tIndex) => (
                        <div key={tIndex}>{task}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
