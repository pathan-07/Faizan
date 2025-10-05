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
  company: "Google Developer Groups (GDG)",
  position: "Organizer",
  period: "09/2025 - Present",
  location: "Gandhinagar, Gujarat, India - Hybrid",
  description: 
  "Serving as an Organizer for Google Developer Groups (GDG), a community-driven initiative focused on developer growth and technology advancement.",
  highlights: [
  "Leading community engagement initiatives to foster a thriving tech ecosystem in the region.",
  "Organizing technical workshops, coding sessions, and hands-on labs on Google technologies.",
  "Coordinating developer-focused events including tech talks, hackathons, and networking sessions.",
  "Managing collaborations with industry professionals and academic institutions.",
  "Facilitating knowledge sharing on Google's latest tools, frameworks, and best practices."
  ],
  },
  {
  company: "GirlScript Summer of Code",
  position: "Contributor",
  period: "07/2025 - Present",
  location: "Delhi, India - Remote",
  description: 
  "Selected as a Contributor for GirlScript Summer of Code open-source collaboration initiatives in India powered by GirlScript.",
  highlights: [
  "Selected as an open-source contributor among thousands of applicants.",
  "Collaborating on real-world open-source projects with diverse tech stacks (Python, JS, Flask, React, etc.).",
  "Working closely with mentors to fix bugs, implement features, and improve documentation.",
  "Contributing to GitHub repositories, submitting PRs, and participating in community discussions.",
  "Gaining hands-on experience in software development, version control, and project collaboration."
  ],
  },
  {
  company: "Open Source Connect India",
  position: "Contributor",
  period: "07/2025 - 10/2025",
  location: "Delhi, India - Remote",
  description: 
  "Selected as a Contributor for Open Source Connect India – one of the largest open-source collaboration initiatives in India powered by NexFellow.",
  highlights: [
  "Selected as an open-source contributor among thousands of applicants.",
  "Collaborating on real-world open-source projects with diverse tech stacks (Python, JS, Flask, React, etc.).",
  "Working closely with mentors to fix bugs, implement features, and improve documentation.",
  "Contributing to GitHub repositories, submitting PRs, and participating in community discussions.",
  "Gaining hands-on experience in software development, version control, and project collaboration."
  ],
  },
  {
  company: "Skill Development Club SSIT",
  position: "Tech Member",
  period: "03/2025 - 09/2025",
  location: "Gandhinagar, Gujarat, India - On Site",
  description:
  "At Shree Swaminarayan Institute of Technology, we organized and facilitated tech workshops focused on AI, coding, and digital skills. I managed live demos and supported seamless event execution, helping foster a culture of innovation among students.",
  highlights: [
    "Organized weekly hands-on workshops on emerging technologies including AI, Web Development, and Machine Learning",
    "Conducted technical seminars featuring industry experts and alumni to bridge academic-industry gap",
    "Facilitated coding boot camps and hackathons to enhance practical programming skills among students",
    "Managed tech talks on topics like prompt engineering, machine learning, and full-stack development",
    "Coordinated project demonstration sessions allowing students to showcase their innovative solutions"
  ]
  },
  {
  company: "Edunet Foundation",
  position: "AI: Transformative Learning with TechSaksham",
  period: "12/2024 - 01/2025",
  location: "Bengaluru, Karnataka, India - Remote",
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
  location: "Bengaluru, Karnataka, India - Remote",
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
    category: 'Portfolio',
    featured: true, // Is project ko featured banaya hai
    description:
      "A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
    details: [
        "Designed with a mobile-first approach ensuring full responsiveness.",
        "Integrated 3D interactive elements using React Three Fiber.",
        "Implemented smooth page transitions and scroll-based animations with Framer Motion.",
        "Optimized for performance and SEO.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liveLink: "#",
    repoLink: "https://github.com/pathan-07/Faizan",
  },
  {
    title: "SMS Spam Detection Model",
    period: "01/2025",
    category: 'AI/ML',
    description:
      "An AI-powered system using NLP to classify SMS messages as spam or legitimate, with a secure web interface.",
    details: [
        "Utilized TF-IDF for text vectorization and trained a Naive Bayes classifier.",
        "Achieved over 97% accuracy on the test dataset.",
        "Built a user-friendly frontend with Flask for real-time predictions.",
        "Implemented OTP-based login for enhanced security.",
    ],
    technologies: ["Python", "Flask", "NLP", "Scikit-learn", "HTML/CSS"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liveLink: "https://sms-spam-detect.onrender.com",
    repoLink: "https://github.com/pathan-07/SMS-SPAM-DETECTION-USING-NLP",
  },
  {
    title: "Chrome Plugin Extension",
    period: "09/2024",
    category: 'Chrome Extension',
    description:
      "A productivity-focused Chrome extension providing a floating timer for screen recording and activity tracking.",
    details: [
        "Developed using vanilla JavaScript and Chrome Extension APIs (Manifest V3).",
        "The timer is draggable across the screen for user convenience.",
        "Lightweight and optimized for minimal performance impact on the browser.",
        "Simple UI for easy start, stop, and reset functionality.",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Chrome API", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    repoLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: React.createElement(Code, {
      className: "h-8 w-8 text-blue-400 mr-4",
    }),
    color: "blue",
    skills: [
      { name: "React", level: 65, years: 1.5, type: "frontend", featured: true },
      { name: "Vibe Coding", level: 75, years: 2, type: "frontend", featured: true },
    ],
  },
  {
    name: "Backend Development",
    icon: React.createElement(Terminal, {
      className: "h-8 w-8 text-green-400 mr-4",
    }),
    color: "green",
    skills: [
      { name: "Python", level: 70, years: 2, type: "backend", featured: true },
      { name: "Flask", level: 60, years: 1, type: "backend", featured: true },
      { name: "Java", level: 60, years: 0.5, type: "backend", featured: true },
      { name: "C Programming", level: 70, years: 0.5, type: "backend", featured: true },
    ],
  },
  {
    name: "AI/ML & Data Science",
    icon: React.createElement(Brain, {
      className: "h-8 w-8 text-purple-400 mr-4",
    }),
    color: "purple",
    skills: [
      { name: "Machine Learning", level: 55, years: 1, type: "ai", featured: true },
      { name: "Natural Language Processing", level: 45, years: 0.5, type: "ai", featured: true },
      { name: "Prompt Engineering", level: 85, years: 3, type: "ai", featured: true },
      { name: "Large Language Models", level: 70, years: 2, type: "ai", featured: true },
      { name: "OpenAI API", level: 60, years: 1, type: "ai", featured: true },
      { name: "RAG Systems", level: 40, years: 0.5, type: "ai", featured: true },
      { name: "Multi-agent AI Systems", level: 50, years: 0.5, type: "ai", featured: true },
      { name: "AI Image Generation", level: 65, years: 1.5, type: "ai", featured: true },
      { name: "MidJourney", level: 70, years: 1, type: "ai", featured: true },
    ],
  },
  {
    name: "Developer Tools",
    icon: React.createElement(Cloud, {
      className: "h-8 w-8 text-cyan-400 mr-4",
    }),
    color: "cyan",
    skills: [
      { name: "Git & Version Control", level: 65, years: 2, type: "emerging", featured: true },
      { name: "AI Tool Integration", level: 60, years: 1, type: "emerging", featured: true },
    ],
  },
];

export const allSkills: string[] = [
  // Frontend Development
  "React", "Vibe Coding",
  // Backend Development  
  "Python", "Flask", "Java", "C Programming",
  // AI/ML & Data Science
  "Machine Learning", "Natural Language Processing", "Prompt Engineering", "Large Language Models",
  "OpenAI API", "RAG Systems", "Multi-agent AI Systems", "AI Image Generation", "MidJourney",
  // Developer Tools
  "Git & Version Control", "AI Tool Integration"
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
    field: "PCM",
    institution: "Hosanna Mission High Secondary School",
    period: "05/2022 - 03/2023",
  },
];

export const certifications: Certification[] = [
    {
    name: "Generative AI Masterminds",
    issuer: "Outskill",
    period: "06/2025 - Present",
    icon: React.createElement(Brain, { className: "text-[#6366F1] text-xl" }),
  },
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
