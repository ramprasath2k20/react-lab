import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Button, } from 'react-bootstrap';
const Slider: React.FC = () => {
  const { filteredCountries } = useSelector((state: RootState) => state.country);
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredCountries = filteredCountries.slice(0, 5); // Show first 5 countries

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCountries.length);
  };

   const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCountries.length) % featuredCountries.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (featuredCountries.length === 0) return null;

  return (
    <div className="slider-container">
      <div className="slider-item">
        <img src={featuredCountries[currentIndex].flag} alt={featuredCountries[currentIndex].name} />
        <h3>{featuredCountries[currentIndex].name}</h3>
        <p>{featuredCountries[currentIndex].region}</p>
      </div>
      <Button className="slider-nav slider-prev" onClick={handlePrev}>
        <img src="/assets/prev-icon.svg" alt="Previous" />
      </Button>
      <Button className="slider-nav slider-next" onClick={handleNext}>
        <img src="/assets/next-icon.svg" alt="Next" />
      </Button>
      <div className="slider-dots">
        {featuredCountries.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};


export default Slider;