
import React, { useState } from 'react';
import TemplateCard, { Template } from './TemplateCard';
import { AspectRatio } from './ui/aspect-ratio';

const templateData: Template[] = [
  {
    id: '1',
    name: 'Modern Minimal',
    //image: '/images/first.png',
    image: '/src/images/first.png',
    atsScore: 95,
    tags: ['Modern', 'Minimalist', 'Professional'],
    upvotes: "",
    downvotes: "",
    component: 'BasicTemplate'
  },
  {
    id: '2',
    name: 'Creative Edge',
    image: '/src/images/sec.png',
    atsScore: 82,
    tags: ['Creative', 'Bold', 'Design'],
    upvotes: "",
    downvotes: "",
    component: 'CreativeTemplate'
  },
  {
    id: '3',
    name: 'Executive Clean',
    image: '/src/images/3rd.jpg',
    atsScore: 98,
    tags: ['Professional', 'Corporate', 'Banking'],
    upvotes: "",
    downvotes: "",
    component: 'ExecutiveTemplate'
  },
  {
    id: '4',
    name: 'Tech Startup',
    image: '/src/images/4th.jpg',
    atsScore: 88,
    tags: ['Tech', 'Modern', 'Startups'],
    upvotes: "",
    downvotes: "",
    component: 'TechTemplate'
  },
  {
    id: '5',
    name: 'Academic Focus',
    image: '/src/images/6.jpg',
    atsScore: 92,
    tags: ['Academic', 'Research', 'Education'],
    upvotes: "",
    downvotes: "",
    component: 'AcademicTemplate'
  },
  {
    id: '6',
    name: 'Internship Specialist',
    image: '/src/images/66.jpg',
    atsScore: 94,
    tags: ['Internship', 'Entry-level', 'Student'],
    upvotes: "",
    downvotes: "",
    component: 'InternshipTemplate'
  }
];

interface TemplateSectionProps {
  id: string;
}

const TemplateSection: React.FC<TemplateSectionProps> = ({ id }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
  };
  
  return (
    <section id={id} className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Resume Template</h2>
          <p className="text-xl text-resumetext-light max-w-2xl mx-auto">
            Pick a design you like. See ATS score.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templateData.map((template) => (
            <TemplateCard 
              key={template.id}
              template={template}
              selected={selectedTemplate === template.id}
              onSelect={handleSelectTemplate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
