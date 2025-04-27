
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Trophy, ArrowRight } from 'lucide-react';

interface SuccessScreenProps {
  onClose: () => void;
}

const SuccessScreen = ({ onClose }: SuccessScreenProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center animate-fade-in">
      <div className="max-w-lg mx-auto text-center p-6 space-y-8">
        <div className="w-20 h-20 mx-auto bg-resumeblue-light rounded-full flex items-center justify-center animate-bounce-subtle">
          <Trophy className="w-10 h-10 text-resumeblue" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-resumetext">
            Congratulations! Your resume is ready!
          </h1>
          <p className="text-xl text-resumetext-light">
            We hope you ace that interview! Thanks for trusting us.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/')} 
            className="w-full sm:w-auto px-8"
          >
            Build Another Resume
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="flex flex-col items-center space-y-4">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8"
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin);
                onClose();
              }}
            >
              Share with a Friend
            </Button>
          </div>
        </div>

        <p className="text-resumetext-lighter text-sm">
          Come back anytime — we'll be here for your next big opportunity!
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;
