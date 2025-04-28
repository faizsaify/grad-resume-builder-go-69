import React, { useState } from 'react';
import TemplateCard, { Template } from './TemplateCard';
import { AspectRatio } from './ui/aspect-ratio';

const templateData: Template[] = [
  {
    id: '1',
    name: 'Modern Minimal',
    image: '/lovable-uploads/979e9a34-8ff3-42ee-94d4-70c2f598d547.png',
    atsScore: 95,
    tags: ['Modern', 'Minimalist', 'Professional'],
    upvotes: 382,
    downvotes: 14,
    component: 'BasicTemplate'
  },
  {
    id: '2',
    name: 'Creative Edge',
    image: '/placeholder.svg',
    atsScore: 82,
    tags: ['Creative', 'Bold', 'Design'],
    upvotes: 243,
    downvotes: 27,
    component: 'CreativeTemplate'
  },
  {
    id: '3',
    name: 'Executive Clean',
    image: '/placeholder.svg',
    atsScore: 98,
    tags: ['Professional', 'Corporate', 'Banking'],
    upvotes: 517,
    downvotes: 9,
    component: 'ExecutiveTemplate'
  },
  {
    id: '4',
    name: 'Tech Startup',
    image: '/placeholder.svg',
    atsScore: 88,
    tags: ['Tech', 'Modern', 'Startups'],
    upvotes: 328,
    downvotes: 21,
    component: 'TechTemplate'
  },
  {
    id: '5',
    name: 'Academic Focus',
    image: '/placeholder.svg',
    atsScore: 92,
    tags: ['Academic', 'Research', 'Education'],
    upvotes: 186,
    downvotes: 12,
    component: 'AcademicTemplate'
  },
  {
    id: '6',
    name: 'Internship Specialist',
    image: '/placeholder.svg',
    atsScore: 94,
    tags: ['Internship', 'Entry-level', 'Student'],
    upvotes: 421,
    downvotes: 15,
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
            Pick a design you like. See ATS score & real user votes.
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
