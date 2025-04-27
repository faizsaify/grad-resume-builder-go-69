
import React, { useState } from 'react';
import TemplateCard, { Template } from './TemplateCard';
import { AspectRatio } from './ui/aspect-ratio';

// Template data with the new Modern Minimal template image
const templateData: Template[] = [
  {
    id: '1',
    name: 'Modern Minimal',
    image: '/lovable-uploads/60e8f55b-e1b0-4f98-a29b-86a9558303df.png', // Updated with the newly uploaded resume image
    atsScore: 95,
    tags: ['Modern', 'Minimalist', 'Professional'],
    upvotes: 382,
    downvotes: 14,
    component: 'BasicTemplate'
  },
  {
    id: '2',
    name: 'Creative Edge',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    atsScore: 82,
    tags: ['Creative', 'Bold', 'Design'],
    upvotes: 243,
    downvotes: 27,
    component: 'CreativeTemplate'
  },
  {
    id: '3',
    name: 'Executive Clean',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
    atsScore: 98,
    tags: ['Professional', 'Corporate', 'Banking'],
    upvotes: 517,
    downvotes: 9,
    component: 'ExecutiveTemplate'
  },
  {
    id: '4',
    name: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop',
    atsScore: 88,
    tags: ['Tech', 'Modern', 'Startups'],
    upvotes: 328,
    downvotes: 21,
    component: 'TechTemplate'
  },
  {
    id: '5',
    name: 'Academic Focus',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    atsScore: 92,
    tags: ['Academic', 'Research', 'Education'],
    upvotes: 186,
    downvotes: 12,
    component: 'AcademicTemplate'
  },
  {
    id: '6',
    name: 'Internship Specialist',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
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
