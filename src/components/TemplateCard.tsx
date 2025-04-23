import React from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export interface Template {
  id: string;
  name: string;
  image: string;
  atsScore: number;
  tags: string[];
  upvotes: number;
  downvotes: number;
}

interface TemplateCardProps {
  template: Template;
  selected: boolean;
  onSelect: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  selected,
  onSelect
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return <div className={`
        template-card 
        ${selected ? 'ring-4 ring-resumeblue/70 scale-105 shadow-2xl bg-resumeblue/5' : 'hover:scale-105 hover:shadow-lg'}
        transition-all duration-300 ease-in-out cursor-pointer
      `} onClick={() => onSelect(template.id)}>
      <div className="relative overflow-hidden">
        <img src={template.image} alt={template.name} className={`
            w-full h-64 object-cover object-top 
            transition-transform duration-700 
            ${selected ? 'brightness-90' : 'brightness-100'}
          `} />
        {selected && <div className="absolute top-3 left-3 bg-resumeblue text-white rounded-full p-2 animate-fade-in">
            <CheckCircle className="h-4 w-4" />
          </div>}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-xs font-medium">
          <span className={`h-2 w-2 ${getScoreColor(template.atsScore)} rounded-full mr-1`}></span>
          ATS Score: {template.atsScore}%
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className={`
          font-medium text-lg mb-2 
          ${selected ? 'text-resumeblue font-bold' : ''}
        `}>
          {template.name}
        </h3>
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.map((tag, index) => <span key={index} className={`
                text-xs px-2 py-1 rounded-full 
                ${selected ? 'bg-resumeblue/20 text-resumeblue' : 'bg-resumeblue-light text-resumeblue'}
              `}>
              {tag}
            </span>)}
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-4 flex justify-between items-center">
        <div className="flex gap-4 text-sm text-resumetext-lighter">
          <div className="flex items-center gap-1">
            <button className="text-gray-400 hover:text-green-500 transition-colors">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <span>{template.upvotes}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <ThumbsDown className="h-4 w-4" />
            </button>
            <span>{template.downvotes}</span>
          </div>
        </div>
        
        {selected && (
          <Button 
            size="lg" 
            className="w-full animate-fade-in text-base font-semibold"
          >
            Continue
          </Button>
        )}
      </div>
    </div>;
};

export default TemplateCard;
