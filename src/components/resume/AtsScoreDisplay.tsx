import React from 'react';
import { ClipboardCheck } from 'lucide-react';
interface AtsScoreDisplayProps {
  score?: number;
}
const AtsScoreDisplay: React.FC<AtsScoreDisplayProps> = ({
  score = 85
}) => {
  return <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
      <ClipboardCheck className="h-5 w-5 text-resumeblue" />
      <div className="flex flex-col">
        
        <div className="text-lg font-semibold text-resumeblue">{score}%</div>
      </div>
    </div>;
};
export default AtsScoreDisplay;