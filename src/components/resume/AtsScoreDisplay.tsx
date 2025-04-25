
import React from 'react';

interface AtsScoreDisplayProps {
  score?: number;
}

const AtsScoreDisplay: React.FC<AtsScoreDisplayProps> = ({
  score = 85
}) => {
  const getScoreColor = () => {
    if (score < 50) return '#FF4D4D';   // Bright Red for low scores
    if (score < 80) return '#FFA500';   // Vibrant Orange for medium scores
    return '#4CAF50';   // Bright Green for high scores
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 text-sm">
      <div 
        className="h-3 w-3 rounded-full"
        style={{ 
          backgroundColor: getScoreColor(),
          boxShadow: `0 0 6px ${getScoreColor()}` 
        }}
      />
      <span className="font-medium text-resumeblue">{score}%</span>
    </div>
  );
};

export default AtsScoreDisplay;
