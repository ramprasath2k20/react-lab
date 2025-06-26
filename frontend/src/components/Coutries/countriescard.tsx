import React from 'react';
import type { Country } from '../../types/country';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card bg-white rounded-lg shadow-md p-6 text-center">
      <img 
        src={country.flag} 
        alt={`Flag of ${country.name}`} 
        className="w-24 h-16 object-cover mx-auto mb-4 border"
      />
      <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
      <p className="text-gray-600">Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;