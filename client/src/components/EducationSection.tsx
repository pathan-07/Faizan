import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { education, certifications } from "../lib/data";

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="education"
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
          <span className="gradient-text">Education & Certifications</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h3 className="text-xl font-bold font-poppins mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#6366F1] mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                  className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg card-hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <span className="text-[#6366F1] text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mb-1">{edu.field}</p>
                  <p className="text-gray-400">{edu.institution}</p>
                  {edu.university && (
                    <p className="text-gray-400">{edu.university}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <h3 className="text-xl font-bold font-poppins mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#6366F1] mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                  className="bg-[#2D2D2D] p-4 rounded-lg shadow-lg flex items-center card-hover"
                >
                  <div className="bg-[#1A1A1A] p-3 rounded-lg mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer} ({cert.period})
                    </p>
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
