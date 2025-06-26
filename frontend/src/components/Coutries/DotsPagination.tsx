import React from 'react';

interface DotsPaginationProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const DotsPagination: React.FC<DotsPaginationProps> = ({
  count,
  activeIndex,
  onDotClick,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default DotsPagination;