import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="md:w-2/5 mb-10 md:mb-0"
          >
            <div className="relative">
              <div className="rounded-lg shadow-xl overflow-hidden border-4 border-[#2D2D2D] bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] p-1">
                <img
                  src="/assets/images/profile-photo.jpg"
                  alt="Pathan Mo. Faizan Khan"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 to-transparent mix-blend-overlay rounded-lg"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#6366F1] rounded-lg flex items-center justify-center shadow-lg transform rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="md:w-3/5 md:pl-12"
          >
            <h2 className="text-3xl font-bold font-poppins mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Hello Everyone! My name is Faizan, and I am currently pursuing a
              Bachelor of Engineering in Computer Science from the Shree
              Swaminarayan Institute of Technology, affiliated with Gujarat
              Technological University.
            </p>
            <p className="text-gray-300 mb-6">
              I have had the privilege of interning at Scaler School of
              Technology's Young Innovators Internship Program 2.0, where I
              gained hands-on experience in innovative solutions, and
              TechSaksham's AI: Transformative Learning Internship, a joint
              initiative by Microsoft, SAP, and AICTE.
            </p>
            <p className="text-gray-300 mb-8">
              As a tech member in the Skill Development Club at SSIT, I help
              organize and facilitate tech workshops focused on AI, coding, and
              digital skills, fostering a culture of innovation among students.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm">
                AI & ML
              </span>
              <span className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm">
                Web Development
              </span>
              <span className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm">
                NLP
              </span>
              <span className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-2 bg-[#2D2D2D] rounded-full text-sm">
                API
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
