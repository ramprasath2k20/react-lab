import React from 'react';
import Button from '../ui/Button';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isLoading?: boolean;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isLoading,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button 
        onClick={onPrev} 
        disabled={!hasPrev}
        variant="secondary"
      >
        Previous
      </Button>
      <Button 
        onClick={onNext} 
        disabled={!hasNext || isLoading}
        variant="primary"
      >
        {isLoading ? 'Loading...' : 'Next'}
      </Button>
    </div>
  );
};

export default SliderControls;