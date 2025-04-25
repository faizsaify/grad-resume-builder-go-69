
import React from 'react';

interface AtsScoreDisplayProps {
  score?: number;
}

const AtsScoreDisplay: React.FC<AtsScoreDisplayProps> = ({
  score = 85
}) => {
  const getScoreColor = () => {
    if (score < 50) return '#ea384c'; // red
    if (score < 80) return '#FEF7CD'; // yellow
    return '#F2FCE2'; // green
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 text-sm">
      <div 
        className="h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: getScoreColor() }}
      />
      <span className="font-medium text-resumeblue">{score}%</span>
    </div>
  );
};

export default AtsScoreDisplay;
