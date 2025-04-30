
import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import TemplateSection from "../components/TemplateSection";

const Index = () => {
  // Create a reference to the template section
  const templateSectionRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to template section
  const scrollToTemplates = () => {
    templateSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onStartBuilding={scrollToTemplates} />
      
      <div ref={templateSectionRef}>
        <TemplateSection id="templates" />
      </div>
      
      <footer className="bg-resumeblue-light py-6">
        <div className="container mx-auto text-center text-resumetext-light text-sm">
          <p>© {new Date().getFullYear()} ResumeBuilder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
