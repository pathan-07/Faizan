import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { experiences } from "../lib/data";
import { Briefcase, Building2, Calendar, MapPin, Check } from "lucide-react";
import FloatingShapes from "./effects/FloatingShapes";

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selected, setSelected] = useState(0); // State to track the selected experience index

  const selectedExperience = experiences[selected];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-muted/20 to-background relative"
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
            className="text-responsive-xl font-bold font-poppins text-center mb-16"
          >
            <span className="gradient-text">My Professional Journey</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 min-h-[450px]">
            {/* Left side: Navigation Tabs for each company */}
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="md:col-span-4 lg:col-span-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0"
            >
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setSelected(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 flex-shrink-0 md:flex-shrink-1 ${
                    selected === index
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <h3 className="font-bold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.position}</p>
                </button>
              ))}
            </motion.div>

            {/* Right side: Content for the selected experience */}
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="md:col-span-8 lg:col-span-9"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="modern-card p-6 lg:p-8 h-full"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold font-poppins text-foreground">
                      {selectedExperience.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="w-4 h-4" />
                      <h4 className="text-lg font-semibold">
                        {selectedExperience.company}
                      </h4>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Internship</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedExperience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedExperience.location}</span>
                    </div>
                  </div>

                  {/* Description and Highlights */}
                  <p className="text-foreground/80 mb-6">
                    {selectedExperience.description}
                  </p>
                  
                  {(selectedExperience.highlights || selectedExperience.achievements || selectedExperience.weeklyTasks) && (
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {[
                          ...(selectedExperience.highlights || []),
                          ...(selectedExperience.achievements || []),
                          ...(selectedExperience.weeklyTasks || []),
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
