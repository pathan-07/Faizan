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

  const timelineData: TimelineItem[] = [
    {
      id: "current",
      type: "current",
      title: "Tech Member - Skill Development Club",
      organization: "SSIT",
      location: "Gujarat, India",
      period: "Present",
      description: "Leading tech workshops and fostering innovation culture among students",
      highlights: [
        "Organizing workshops on AI & coding",
        "Conducting technical seminars with experts",
        "Facilitating hackathons & boot camps",
        "Managing tech talks on emerging technologies",
        "Coordinating project showcase sessions"
      ],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: "opensource1",
      type: "current",
      title: "Open Source Contributor",
      organization: "GirlScript Summer of Code",
      location: "Remote",
      period: "Present",
      description: "Selected contributor for one of India's largest open-source initiatives",
      highlights: [
        "Selected among thousands of applicants",
        "Working with diverse tech stacks",
        "Implementing features & fixing bugs",
        "Submitting PRs & participating in discussions",
        "Collaborating with mentors on real projects"
      ],
      icon: <Github className="w-5 h-5" />
    },
    {
      id: "opensource2",
      type: "current",
      title: "Open Source Contributor",
      organization: "Open Source Connect India",
      location: "Remote",
      period: "Present",
      description: "Contributing to collaborative open-source projects powered by NexFellow",
      highlights: [
        "Working on real-world GitHub repositories",
        "Improving documentation & code quality",
        "Participating in community discussions",
        "Gaining version control expertise",
        "Building collaboration skills"
      ],
      icon: <Github className="w-5 h-5" />
    },
    {
      id: "techsaksham",
      type: "internship",
      title: "AI: Transformative Learning Internship",
      organization: "TechSaksham (Microsoft, SAP, AICTE)",
      location: "Remote",
      period: "2024",
      description: "Joint initiative focusing on AI technologies and transformative learning approaches",
      highlights: [
        "Solving real-world challenges with AI",
        "Attending expert mentorship sessions",
        "Participating in industry masterclasses",
        "Developing project prototypes",
        "Earning Microsoft & SAP certifications"
      ],
      icon: <Code className="w-5 h-5" />
    },
    {
      id: "scaler",
      type: "internship",
      title: "Young Innovators Program 2.0",
      organization: "Scaler School of Technology",
      location: "Remote",
      period: "2024",
      description: "Gained hands-on experience in innovative solutions and modern development practices",
      highlights: [
        "Working with AI for startups",
        "Building no-code websites",
        "Developing Discord bots",
        "Creating Chrome plugins",
        "Learning leadership & marketing skills"
      ],
      icon: <Code className="w-5 h-5" />
    },
    {
      id: "education",
      type: "education",
      title: "Bachelor of Engineering - Computer Science",
      organization: "Shree Swaminarayan Institute of Technology",
      location: "Gandhinagar, Gujarat, India",
      period: "2023 - 2027",
      description: "Pursuing B.E. in Computer Science with focus on AI, ML, and Software Development",
      highlights: [
        "Core CS fundamentals",
        "Core Python With Data Science",
        "Software engineering practices"
      ],
      icon: <GraduationCap className="w-5 h-5" />
    }
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
      className="section-padding bg-gradient-to-b from-background to-muted/20 relative"
    >
      <FloatingShapes />
      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Content Section - 60% */}
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-responsive-xl font-bold font-poppins mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{personalInfo.yearsOfExperience} years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{personalInfo.currentStatus}</span>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Hello! I'm <strong className="text-primary">Faizan</strong>, a passionate Computer Science student 
                currently pursuing my Bachelor of Engineering at the Shree Swaminarayan Institute of Technology, 
                affiliated with Gujarat Technological University.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                My journey in technology has been shaped by hands-on experiences through prestigious internships, 
                including the <span className="text-accent font-medium">Scaler School of Technology's Young Innovators Program 2.0</span> and 
                <span className="text-accent font-medium"> TechSaksham's AI: Transformative Learning Internship</span> — 
                a joint initiative by Microsoft, SAP, and AICTE.
              </p>

              {showFullBio && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground/90 leading-relaxed mb-6">
                    As a tech member in the Skill Development Club at SSIT, I actively contribute to fostering 
                    a culture of innovation by organizing and facilitating workshops focused on AI, coding, and 
                    digital skills. This role has allowed me to share knowledge while continuously learning from 
                    peers and industry experts.
                  </p>
                  
                  <p className="text-foreground/90 leading-relaxed mb-6">
                    I'm particularly passionate about the intersection of artificial intelligence and web development, 
                    constantly exploring how these technologies can create meaningful solutions to real-world problems. 
                    Currently, I'm diving deep into advanced deep learning techniques and cloud architecture.
                  </p>
                </motion.div>
              )}

              <Button
                variant="ghost"
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
              >
                {showFullBio ? "Show Less" : "Read More"}
              </Button>
            </div>

            {/* Current Focus */}
            <div className="glass-card p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Currently Learning
              </h3>
              <p className="text-foreground/80 font-medium">{personalInfo.currentlyLearning}</p>
            </div>

            {/* Skills Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Personality Elements */}
            <div className="flex flex-wrap gap-4 mb-8">
              {personalityElements.map((element, index) => (
                <motion.div
                  key={element.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium"
                >
                  {element.icon}
                  <span>{element.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="btn-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-primary/30 hover:border-primary">
                  View My Work
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual Section - 40% */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            {/* Profile Photo */}
            <div className="relative mb-8">
              <div className="relative group">
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/profile-photo.jpg"
                    alt="Pathan Mo. Faizan Khan"
                    className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 glass-card px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">My Journey</h3>
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeTimelineItem === item.id ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveTimelineItem(activeTimelineItem === item.id ? "" : item.id)}
                >
                  <div className={`modern-card p-4 ${
                    item.type === 'current' ? 'border-primary/50 bg-primary/5' :
                    item.type === 'internship' ? 'border-accent/50 bg-accent/5' :
                    'border-muted-foreground/20'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'current' ? 'bg-primary/20 text-primary' :
                        item.type === 'internship' ? 'bg-accent/20 text-accent' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {item.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-tight mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.organization} • {item.period}
                        </p>
                        <p className="text-xs text-foreground/70 line-clamp-2">
                          {item.description}
                        </p>
                        
                        {activeTimelineItem === item.id && item.highlights && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-border/50"
                          >
                            <ul className="space-y-1">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-xs text-foreground/60 flex items-start gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
