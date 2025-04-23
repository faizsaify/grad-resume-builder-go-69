
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStartBuilding: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartBuilding }) => {
  return (
    <section className="bg-gradient-to-b from-white to-resumepeach-light min-h-[85vh] flex items-center">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build a job-ready resume—
              <span className="text-resumeblue">fast, clean, and stress-free.</span>
            </h1>
            <p className="text-xl text-resumetext-light mb-8 max-w-xl">
              No design skills needed. Just pick a template, fill in your info, and get hired.
            </p>
            <button 
              className="btn-primary flex items-center gap-2 group"
              onClick={onStartBuilding}
            >
              Start Building Now
              <ArrowDown className="w-4 h-4 group-hover:animate-bounce-subtle" />
            </button>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Resume Builder Preview Animation */}
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200 transform -rotate-1">
                <div className="bg-resumeblue-light rounded p-3 mb-3">
                  <div className="h-6 w-32 bg-white/50 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-8 bg-resumeblue-light rounded-full"></div>
                  <div className="space-y-1">
                    <div className="h-3 w-24 bg-gray-100 rounded"></div>
                    <div className="h-3 w-32 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-3 rotate-3 animate-bounce-subtle">
                <div className="h-24 w-20 bg-resumepeach rounded-lg flex items-center justify-center">
                  <div className="h-16 w-14 bg-white/80 rounded"></div>
                </div>
                <div className="mt-2 h-3 w-14 bg-gray-100 mx-auto rounded"></div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 -rotate-6">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="h-2 w-full bg-gray-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
