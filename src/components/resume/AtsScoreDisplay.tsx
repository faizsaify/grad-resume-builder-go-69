
import React from 'react';
import { CircleSlash } from 'lucide-react';

interface AtsScoreDisplayProps {
  score?: number;
}

const AtsScoreDisplay: React.FC<AtsScoreDisplayProps> = ({ score = 85 }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col items-end">
        <div className="text-xs text-gray-500">ATS Score</div>
        <div className="text-lg font-semibold text-resumeblue">{score}%</div>
      </div>
      <CircleSlash className="h-6 w-6 text-resumeblue" />
    </div>
  );
};

export default AtsScoreDisplay;
