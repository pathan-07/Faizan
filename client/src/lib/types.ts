import React from 'react';

export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  achievements?: string[];
  weeklyTasks?: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  additionalInfo?: string;
  technologies: string[];
  image: string;
  link: string;
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  university?: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  title: string;
  value: string;
  icon: React.ReactNode;
  isLink?: boolean;
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
}
