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
  category: 'AI/ML' | 'Web App' | 'Chrome Extension' | 'Portfolio'; // Naya field add kiya hai
  featured?: boolean; // Naya optional field
  description: string;
  details: string[]; // additionalInfo ko details se replace kiya hai
  technologies: string[];
  image: string;
  images?: string[]; // Modal ke liye extra images
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  years?: number;
  type?: 'frontend' | 'backend' | 'ai' | 'design' | 'management' | 'emerging';
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color?: string;
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
