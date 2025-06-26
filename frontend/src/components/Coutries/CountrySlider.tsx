import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { loadCountries, incrementPage } from '../../store/features/countrySlice';
import CountryCard from '../Coutries/countriescard';
import SliderControls from './SliderControls';
import DotsPagination from './DotsPagination';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';

const CountrySlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    countries,
    currentPage,
    loading,
    error,
    hasMore,
  } = useAppSelector((state) => state.country);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    dispatch(loadCountries(currentPage));
  }, [currentPage, dispatch]);

  const handleNext = () => {
    if (currentIndex < countries.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (hasMore) {
      dispatch(incrementPage());
      // The new items will be loaded and added to the array
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (error) return <ErrorMessage message={error} />;
  if (loading && countries.length === 0) return <LoadingSpinner />;

  return (
    <div className="country-slider max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Countries Explorer</h1>
      
      {countries.length > 0 && (
        <>
          <div className="slide-container min-h-64 flex items-center justify-center">
            <CountryCard country={countries[currentIndex]} />
          </div>

          <SliderControls
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < countries.length - 1 || hasMore}
            isLoading={loading}
          />

          <DotsPagination
            count={countries.length}
            activeIndex={currentIndex}
            onDotClick={setCurrentIndex}
          />
        </>
      )}
    </div>
  );
};

export default CountrySlider;