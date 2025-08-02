import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { education, certifications } from "../lib/data";
import { GraduationCap, Award, Calendar, University } from "lucide-react";
import FloatingShapes from "./effects/FloatingShapes";

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-muted/20 relative"
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
            <span className="gradient-text">Education & Certifications</span>
          </motion.h2>

          {/* Main Education Card */}
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mb-16">
            {education.slice(0, 1).map((edu) => (
              <div key={edu.degree} className="modern-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="md:col-span-8 text-center md:text-left">
                  <h3 className="text-2xl font-bold font-poppins text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground">{edu.field}</p>
                </div>
                <div className="md:col-span-3 text-center md:text-right">
                   <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground mb-1">
                      <University className="w-4 h-4" />
                      <span>{edu.institution}</span>
                   </div>
                   <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <h3 className="text-2xl font-bold text-center mb-12">Licenses & Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={fadeIn("up", "tween", 0.4 + index * 0.1, 1)}
                  className="modern-card p-6 flex items-start gap-4 group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
