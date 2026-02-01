import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Briefcase, Code, Heart, Coffee, Github, Linkedin, Mail } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/motion";
import { Button } from "./ui/button";
import FloatingShapes from "./effects/FloatingShapes";

interface TimelineItem {
  id: string;
  type: 'education' | 'internship' | 'current';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
  icon: React.ReactNode;
}

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTimelineItem, setActiveTimelineItem] = useState<string>("");
  const [showFullBio, setShowFullBio] = useState(false);

  const personalInfo = {
    name: "Pathan Mo. Faizan Khan",
    currentRole: "Computer Science Student & Tech Innovator",
    location: "Gujarat, India",
    yearsOfExperience: "1+",
    currentStatus: "Pre-Final Year B.E. Student",
    passions: ["AI & Machine Learning", "Web Development", "Innovation"],
    currentlyLearning: "Machine Learning and Data Science",
  };

  // Using a more compact and maintainable approach to timeline data
  const createTimelineItem = (
    id: string,
    type: 'education' | 'internship' | 'current',
    title: string,
    organization: string,
    period: string,
    description: string,
    highlights: string[],
    icon: React.ReactNode,
    location: string = "Remote"
  ): TimelineItem => ({
    id, type, title, organization, location, period, description, highlights, icon
  });

  const timelineData: TimelineItem[] = [
    createTimelineItem(
      "gdg", "current", "Organizer", "Google Developer Groups (GDG)", "Present",
      "Community-driven initiative focused on developer growth and technology advancement",
      ["Leading community engagement initiatives", "Organizing technical workshops", "Coordinating events and hackathons",
        "Managing industry collaborations", "Facilitating knowledge sharing"],
      <Briefcase className="w-5 h-5" />, "Gandhinagar, Gujarat, India"
    ),
    createTimelineItem(
      "opensource1", "current", "Open Source Contributor", "GirlScript Summer of Code", "2025",
      "Selected contributor for one of India's largest open-source initiatives",
      ["Selected among thousands of applicants", "Working with diverse tech stacks", "Implementing features & fixing bugs",
        "Submitting PRs & participating in discussions", "Collaborating with mentors"],
      <Github className="w-5 h-5" />
    ),
    createTimelineItem(
      "opensource2", "current", "Open Source Contributor", "Open Source Connect India", "2025",
      "Contributing to collaborative open-source projects powered by NexFellow",
      ["Working on real-world repositories", "Improving documentation & code", "Participating in discussions",
        "Gaining version control expertise", "Building collaboration skills"],
      <Github className="w-5 h-5" />
    ),
    createTimelineItem(
      "current", "current", "Tech Member - Skill Development Club", "SSIT", "2025",
      "Leading tech workshops and fostering innovation culture among students",
      ["Organizing workshops on AI & coding", "Conducting technical seminars", "Facilitating hackathons",
        "Managing tech talks", "Coordinating project showcases"],
      <Briefcase className="w-5 h-5" />, "Gujarat, India"
    ),
    createTimelineItem(
      "techsaksham", "internship", "AI: Transformative Learning Internship", "TechSaksham (Microsoft, SAP, AICTE)", "2024",
      "Joint initiative focusing on AI technologies and transformative learning approaches",
      ["Solving real-world challenges with AI", "Attending mentorship sessions", "Participating in masterclasses",
        "Developing project prototypes", "Earning certifications"],
      <Code className="w-5 h-5" />
    ),
    createTimelineItem(
      "scaler", "internship", "Young Innovators Program 2.0", "Scaler School of Technology", "2024",
      "Gained hands-on experience in innovative solutions and modern development practices",
      ["Working with AI for startups", "Building no-code websites", "Developing Discord bots",
        "Creating Chrome plugins", "Learning leadership skills"],
      <Code className="w-5 h-5" />
    ),
    createTimelineItem(
      "education", "education", "Bachelor of Engineering - Computer Science", "Shree Swaminarayan Institute of Technology", "2023 - 2027",
      "Pursuing B.E. in Computer Science with focus on AI, ML, and Software Development",
      ["Core CS fundamentals", "Core Python With Data Science", "Software engineering practices"],
      <GraduationCap className="w-5 h-5" />, "Gandhinagar, Gujarat, India"
    )
  ];

  const skills = [
    { name: "AI & ML", color: "skill-ai" },
    { name: "Web Development", color: "skill-web" },
    { name: "NLP", color: "skill-ai" },
    { name: "Python", color: "skill-ai" },
    { name: "React", color: "skill-web" },
    { name: "N8N-Agents", color: "skill-ai" }
  ];

  const personalityElements = [
    { icon: <Coffee className="w-4 h-4" />, text: "Coffee Enthusiast" },
    { icon: <Code className="w-4 h-4" />, text: "Problem Solver" },
    { icon: <Heart className="w-4 h-4" />, text: "Innovation Driven" }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-8 md:py-10 bg-gradient-to-b from-background to-muted/20 relative"
    >
      <FloatingShapes />
      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8"
        >
          {/* Content Section - 60% */}
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Header - More Compact */}
            <div className="mb-5">
              <h2 className="text-responsive-xl font-bold font-poppins mb-2">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-sm">{personalInfo.yearsOfExperience} years experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span className="text-sm">{personalInfo.currentStatus}</span>
                </div>
              </div>
            </div>

            {/* Introduction - More Compact */}
            <div className="prose prose-sm dark:prose-invert max-w-none mb-5">
              <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                Hello! I'm <strong className="text-primary">Faizan</strong>, a passionate Computer Science student
                currently pursuing my Bachelor of Engineering at the Shree Swaminarayan Institute of Technology,
                affiliated with Gujarat Technological University.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                My journey in technology has been shaped by hands-on experiences through prestigious internships,
                including the <span className="text-primary font-medium">Scaler School of Technology's Young Innovators Program 2.0</span> and
                <span className="text-primary font-medium"> TechSaksham's AI: Transformative Learning Internship</span>.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                I'm also proud to serve as an <span className="text-primary font-medium">Organizer for Google Developer Groups (GDG)</span>,
                where I help lead community initiatives, organize technical workshops, and coordinate events
                that foster growth and innovation in the developer community.
              </p>

              {showFullBio && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground/90 leading-relaxed mb-3 text-sm">
                    As a tech member in the Skill Development Club at SSIT, I organize workshops
                    focused on AI, coding, and digital skills, while continuously learning from peers and industry experts.
                  </p>

                  <p className="text-foreground/90 leading-relaxed mb-3 text-sm">
                    I'm passionate about the intersection of AI and web development,
                    exploring how these technologies can create meaningful solutions to real-world problems.
                  </p>
                </motion.div>
              )}

              <Button
                variant="ghost"
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium text-sm mt-1"
              >
                {showFullBio ? "Show Less" : "Read More"}
              </Button>
            </div>

            {/* Current Focus - More Compact */}
            <div className="glass-card p-4 mb-5">
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                Currently Learning
              </h3>
              <p className="text-foreground/80 font-medium text-sm">{personalInfo.currentlyLearning}</p>
            </div>

            {/* Skills Tags - More Compact */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-3 py-1.5 rounded-full border text-xs transition-all duration-300 hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Personality Elements - More Compact */}
            <div className="flex flex-wrap gap-2 mb-5">
              {personalityElements.map((element, index) => (
                <motion.div
                  key={element.text}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted/50 rounded-lg text-xs font-medium"
                >
                  {element.icon}
                  <span>{element.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA - More Compact */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="sm" className="btn-primary">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  Let's Connect
                </Button>
              </a>
              <a href="#projects">
                <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary">
                  View My Work
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual Section - 40% - More Compact */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            {/* Profile Photo */}
            <div className="relative mb-5">
              <div className="relative group">
                <div className="modern-card p-2 rounded-full overflow-hidden bg-card/50 backdrop-blur-sm border-border">
                  <div className="relative aspect-square rounded-full overflow-hidden bg-muted/50 flex items-center justify-center">
                    <img
                      src="/assets/images/profile-new.jpg"
                      alt="Pathan Mo. Faizan Khan"
                      className="w-full h-full object-contain object-center transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-xl border-border bg-card/80 backdrop-blur-md">
                  <Code className="w-6 h-6 text-primary" />
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 glass-card px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border-border">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wide text-foreground/90">Open to work</span>
                </div>
              </div>
            </div>

            {/* Interactive Timeline - Compact Version */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2">My Journey</h3>
              <div className="max-h-[420px] overflow-y-auto pr-2 timeline-scroll">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`cursor-pointer transition-all duration-300 mb-2 ${activeTimelineItem === item.id ? 'transform scale-102' : ''
                      }`}
                    onClick={() => setActiveTimelineItem(activeTimelineItem === item.id ? "" : item.id)}
                  >
                    <div className={`modern-card p-2.5 ${item.type === 'current' ? 'border-primary/50 bg-primary/5' :
                        item.type === 'internship' ? 'border-primary/50 bg-primary/5' :
                          'border-muted-foreground/20'
                      }`}>
                      <div className="flex items-start gap-2">
                        <div className={`p-1.5 rounded-lg ${item.type === 'current' ? 'bg-primary/20 text-primary' :
                            item.type === 'internship' ? 'bg-primary/20 text-primary' :
                              'bg-muted text-muted-foreground'
                          }`}>
                          {item.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-xs leading-tight mb-0.5">
                              {item.title}
                            </h4>
                            <span className="text-[10px] text-muted-foreground">{item.period}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground mb-0.5">
                            {item.organization}
                          </p>

                          {activeTimelineItem === item.id && item.highlights && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1.5 pt-1.5 border-t border-border/30"
                            >
                              <ul className="grid grid-cols-1 gap-y-0.5">
                                {item.highlights.map((highlight, idx) => (
                                  <li key={idx} className="text-[10px] text-foreground/60 flex items-start gap-1.5">
                                    <div className="w-1 h-1 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
