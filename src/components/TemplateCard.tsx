
import React from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';
import { Skeleton } from './ui/skeleton';

export interface Template {
  id: string;
  name: string;
  image: string;
  localImage?: string; // Optional local image path
  atsScore: number;
  tags: string[];
  upvotes: number;
  downvotes: number;
  component: string; // Reference to the template component to use
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
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(template.localImage || template.image);
  const [imageError, setImageError] = React.useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleImageError = () => {
    console.error(`Failed to load image for template: ${template.name}`);
    setImageError(true);
    
    // If local image failed, try the fallback image
    if (imageSrc === template.localImage && template.image) {
      setImageSrc(template.image);
    } else {
      // If both failed, use placeholder
      setImageSrc('https://placehold.co/600x400?text=Template+Preview');
    }
  };
  
  return <div className={`
        template-card 
        ${selected ? 'ring-4 ring-resumeblue/70 scale-105 shadow-2xl bg-resumeblue/5' : 'hover:scale-105 hover:shadow-lg'}
        transition-all duration-300 ease-in-out cursor-pointer
      `} onClick={() => onSelect(template.id)}>
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4 / 3}>
          {!isImageLoaded && !imageError && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <img 
            src={imageSrc} 
            alt={`${template.name} resume template`} 
            className={`object-contain w-full h-full ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
            onError={handleImageError}
          />
        </AspectRatio>
        {selected && <div className="absolute top-3 left-3 bg-resumeblue text-white rounded-full p-2 animate-fade-in">
            <CheckCircle className="h-4 w-4" />
          </div>}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-xs font-medium">
          <span className={`h-2 w-2 ${getScoreColor(template.atsScore)} rounded-full mr-1`}></span>
          ATS Score: {template.atsScore}%
        </div>
      </div>
      
      <div className="px-4 pt-4 pb-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className={`
            font-medium text-lg
            ${selected ? 'text-resumeblue font-bold' : ''}
          `}>
            {template.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-resumetext-lighter">
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
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.map((tag, index) => <span key={index} className={`
                text-xs px-2 py-1 rounded-full 
                ${selected ? 'bg-resumeblue/20 text-resumeblue' : 'bg-resumeblue-light text-resumeblue'}
              `}>
              {tag}
            </span>)}
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-3">
        {selected && <Link to={`/editor/${template.id}`} className="w-full">
            <Button size="sm" className="w-full text-sm font-medium px-3 py-2" onClick={e => {
          e.stopPropagation();
        }}>
              Continue
            </Button>
          </Link>}
      </div>
    </div>;
};

export default TemplateCard;
