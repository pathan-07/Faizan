import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import LoadingAnimation from "@/components/LoadingAnimation";
import SEO from "@/components/SEO";
import QuoteSection from "@/components/QuoteSection"; // I've added the missing import

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate sections on scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-background">
        <LoadingAnimation size="large" color="primary" />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Pathan Mo. Faizan Khan - Portfolio" 
        description="Portfolio website of Pathan Mo. Faizan Khan, Computer Science Engineering Student and Tech Enthusiast showcasing projects, skills, and experience."
        type="website"
      />
      <PageTransition>
        <Layout>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <QuoteSection />
          <ContactSection />
        </Layout>
      </PageTransition>
    </>
  );
};

export default Home;