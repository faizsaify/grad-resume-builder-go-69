
import React, { useState } from 'react';
import TemplateCard, { Template } from './TemplateCard';

const templateData: Template[] = [
  {
    id: '1',
    name: 'Modern Minimal',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop',
    atsScore: 95,
    tags: ['Modern', 'Minimalist', 'Professional'],
    upvotes: 382,
    downvotes: 14
  },
  {
    id: '2',
    name: 'Creative Edge',
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop',
    atsScore: 82,
    tags: ['Creative', 'Bold', 'Design'],
    upvotes: 243,
    downvotes: 27
  },
  {
    id: '3',
    name: 'Executive Clean',
    image: 'https://images.unsplash.com/photo-1574618464083-e96c6467f6e6?q=80&w=1931&auto=format&fit=crop',
    atsScore: 98,
    tags: ['Professional', 'Corporate', 'Banking'],
    upvotes: 517,
    downvotes: 9
  },
  {
    id: '4',
    name: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1923&auto=format&fit=crop',
    atsScore: 88,
    tags: ['Tech', 'Modern', 'Startups'],
    upvotes: 328,
    downvotes: 21
  },
  {
    id: '5',
    name: 'Academic Focus',
    image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2070&auto=format&fit=crop',
    atsScore: 92,
    tags: ['Academic', 'Research', 'Education'],
    upvotes: 186,
    downvotes: 12
  },
  {
    id: '6',
    name: 'Internship Specialist',
    image: 'https://images.unsplash.com/photo-1605940850929-0571a602d226?q=80&w=1964&auto=format&fit=crop',
    atsScore: 94,
    tags: ['Internship', 'Entry-level', 'Student'],
    upvotes: 421,
    downvotes: 15
  }
];

interface TemplateSectionProps {
  id: string;
}

const TemplateSection: React.FC<TemplateSectionProps> = ({ id }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
    // In a real app, you would save this selection and navigate to the editor
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
