import {
  Code,
  Brain,
  Users,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  MessageSquare,
  Cpu,
  Globe,
  Award,
  Cloud,
  Terminal,
} from "lucide-react";
import React from "react";
import {
  Experience,
  Project,
  SkillCategory,
  Education,
  Certification,
  ContactInfo,
  SocialLink,
} from "./types";

export const experiences: Experience[] = [
  {
    company: "Skill Development Club SSIT",
    position: "Tech Member",
    period: "03/2025 - Present",
    location: "Gandhinagar, Gujarat, India",
    description:
      "At Shree Swaminarayan Institute of Technology, we organized and facilitated tech workshops focused on AI, coding, and digital skills. I managed live demos and supported seamless event execution, helping foster a culture of innovation among students.",
  },
  {
    company: "LetsUpgrade",
    position: "Student Ambassador",
    period: "01/2025 - 31/2025",
    location: "Mumbai, Maharashtra, India",
    description:
      "Working as a student ambassador to promote learning and technology adoption among peers.",
  },
  {
    company: "Edunet Foundation",
    position: "AI: Transformative Learning with TechSaksham",
    period: "12/2024 - 01/2025",
    location: "Bengaluru, Karnataka, India",
    description:
      "4-week internship associated with Microsoft, SAP, AICTE, and Edunet Foundation.",
    highlights: [
      "Gained foundational skills in Artificial Intelligence technologies",
      "Worked on an independent project, focusing on solving real-world challenges through AI",
      "Participated in mentorship sessions with experts from Microsoft and SAP",
      "Attended masterclasses to enhance technical and analytical skills",
      "Earned certifications from Microsoft, SAP, AICTE, and Edunet Foundation",
    ],
    achievements: [
      "Developed a project prototype presented to industry experts",
      "Successfully completed weekly milestones including literature reviews, methodology planning, and implementation",
    ],
  },
  {
    company: "Scaler School of Technology",
    position: "Young Innovators Internship",
    period: "06/2024 - 09/2024",
    location: "Bengaluru, Karnataka, India",
    description:
      "10-week internship program focused on diverse technology and business skills.",
    weeklyTasks: [
      "Week 1: Artificial intelligence for startups",
      "Week 2: Build a personal brand",
      "Week 3: No code website building",
      "Week 4: Ace the art of selling",
      "Week 5: Develop a discord bot",
      "Week 6: Learn referral marketing",
      "Week 7: Master social media marketing",
      "Week 8: Build a collaborative community",
      "Week 9: Build Chrome plugins",
      "Week 10: How to become a leader?",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Modern Portfolio Website",
    period: "05/2025",
    description:
      "Designed and built a modern, responsive personal portfolio website using React, Tailwind CSS, and Framer Motion.",
    additionalInfo:
      "This website features smooth animations, a dark theme with custom accents, responsive design for all devices, and interactive sections showcasing projects, skills, and experiences.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/pathan-07/ProfessionalPortfolio",
    liveLink: "#",
    repoLink: "https://github.com/pathan-07/dashbord",
  },
  {
    title: "SMS Spam Detection Model",
    period: "12/2024 - 01/2025",
    description:
      "Developed an AI-powered SMS spam detection system that leverages Natural Language Processing and TF-IDF vectorization to accurately classify messages as spam or legitimate.",
    additionalInfo:
      "The project features a secure web interface built with HTML, CSS, and JavaScript, complete with registration and OTP-based login to ensure robust user authentication and enhanced communication security.",
    technologies: ["NLP", "Python", "Flask", "HTML/CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/pathan-07/SMS-SPAM-DETECTION-USING-NLP",
    liveLink: "https://sms-spam-detect.onrender.com",
    repoLink: "https://github.com/pathan-07/SMS-SPAM-DETECTION-USING-NLP",
  },
  {
    title: "Chrome Plugin Extension",
    period: "09/2024",
    description:
      "Developed a Chrome extension that provides a floating timer feature for screen recording and activity tracking.",
    additionalInfo:
      "The extension allows users to monitor their screen time efficiently with an easy-to-drag timer interface, enhancing productivity and user experience during tutorials, presentations, or online sessions.",
    technologies: ["JavaScript", "HTML/CSS", "Chrome API", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
    repoLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming & Development",
    icon: React.createElement(Code, {
      className: "h-8 w-8 text-[#6366F1] mr-4",
    }),
    skills: [
      { name: "Python", level: 60 },
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 55 },
      { name: "Java", level: 55 },
      { name: "C Programming", level: 60 },
      { name: "Flask", level: 45 },
      { name: "Vibe Coding", level: 70 },
    ],
  },
  {
    name: "AI & Data Science",
    icon: React.createElement(Brain, {
      className: "h-8 w-8 text-[#6366F1] mr-4",
    }),
    skills: [
      { name: "Natural Language Processing", level: 45 },
      { name: "Jupyter", level: 45 },
      { name: "Machine Learning", level: 45 },
      { name: "Data Analysis", level: 45 },
      { name: "Problem Analysis", level: 85 },
    ],
  },
  {
    name: "Soft Skills & Management",
    icon: React.createElement(Users, {
      className: "h-8 w-8 text-[#6366F1] mr-4",
    }),
    skills: [
      { name: "Communication", level: 90 },
      { name: "Project Management", level: 75 },
      { name: "Public Speaking", level: 85 },
      { name: "Creative Problem Solving", level: 80 },
      { name: "Social Media Marketing", level: 45 },
    ],
  },
];

export const allSkills: string[] = [
  "Analytical Skills",
  "API",
  "CSS",
  "Communication",
  "Creative Problem Solving",
  "Flask",
  "HTML",
  "Java",
  "JavaScript",
  "JSON",
  "Jupyter",
  "Machine Learning",
  "NLP",
  "Problem Analysis",
  "Project Management",
  "Public Speaking",
  "Python",
  "Social Media Marketing",
  "Technology Integration",
  "Vibe Coding",
  "Website Building",
  "C Programming",
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering - BE",
    field: "Computer Science and Engineering",
    institution: "Shree Swaminarayan Institute of Technology",
    university: "Gujarat Technological University (GTU)",
    period: "06/2023 - 06/2027",
  },
  {
    degree: "12th in Science",
    field: "",
    institution: "Hosanna Mission High Secondary School",
    period: "05/2022 - 03/2023",
  },
];

export const certifications: Certification[] = [
  {
    name: "AI: Transformative Learning with TechSaksham",
    issuer: "Edunet Foundation",
    period: "03/2025 - Present",
    icon: React.createElement(Brain, { className: "text-[#6366F1] text-xl" }),
  },
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "LetsUpgrade",
    period: "01/2025 - Present",
    icon: React.createElement(Cpu, { className: "text-[#6366F1] text-xl" }),
  },
  {
    name: "Young Innovators Internship 2.0",
    issuer: "Scaler School of Technology",
    period: "10/2024 - Present",
    icon: React.createElement(Globe, { className: "text-[#6366F1] text-xl" }),
  },
  {
    name: "Generative AI for Business Leaders",
    issuer: "LinkedIn",
    period: "08/2024 - Present",
    icon: React.createElement(Brain, { className: "text-[#6366F1] text-xl" }),
  },
  {
    name: "Deploy Static Website Using Azure",
    issuer: "Microsoft Learn Student Ambassadors",
    period: "05/2024 - Present",
    icon: React.createElement(Cloud, { className: "text-[#6366F1] text-xl" }),
  },
  {
    name: "C Programming Basic",
    issuer: "Simplilearn",
    period: "02/2024 - Present",
    icon: React.createElement(Terminal, {
      className: "text-[#6366F1] text-xl",
    }),
  },
];

export const contactInfo: ContactInfo[] = [
  {
    title: "Location",
    value: "Ahmedabad, Gujarat, India",
    icon: React.createElement(MapPin, { className: "text-[#6366F1] text-xl" }),
  },
  {
    title: "Email",
    value: "pathanfaizankhan0123@gmail.com",
    icon: React.createElement(Mail, { className: "text-[#6366F1] text-xl" }),
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/pathan-mo-faizan-khan",
    icon: React.createElement(Linkedin, {
      className: "text-[#6366F1] text-xl",
    }),
    isLink: true,
    link: "https://linkedin.com/in/pathan-mo-faizan-khan",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: React.createElement(Github, { className: "h-5 w-5" }),
    link: "https://github.com/pathan-07",
  },
  {
    name: "Twitter",
    icon: React.createElement(Twitter, { className: "h-5 w-5" }),
    link: "https://x.com/its_khan_070",
  },
  {
    name: "Instagram",
    icon: React.createElement(Instagram, { className: "h-5 w-5" }),
    link: "https://www.instagram.com/its_khan_070",
  },
  {
    name: "Message",
    icon: React.createElement(MessageSquare, { className: "h-5 w-5" }),
    link: "pathanfaizankhan0123@gmail.com",
  },
];
