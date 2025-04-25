
import React from 'react';
import { CircleSlash } from 'lucide-react';

interface AtsScoreDisplayProps {
  score?: number;
}

const AtsScoreDisplay: React.FC<AtsScoreDisplayProps> = ({ score = 85 }) => {
  return (
    <div className="absolute right-6 top-[80px] z-10">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col items-end">
          <div className="text-xs text-gray-500">ATS Score</div>
          <div className="text-xl font-semibold text-resumeblue">{score}%</div>
        </div>
        <CircleSlash className="h-8 w-8 text-resumeblue" />
      </div>
    </div>
  );
};

export default AtsScoreDisplay;
