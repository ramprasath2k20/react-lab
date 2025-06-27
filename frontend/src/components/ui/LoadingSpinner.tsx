import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingSpinnerProps {
  size?: 'sm' | undefined;
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size, message = 'Loading...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-4">
      <Spinner 
        animation="border" 
        role="status" 
        size={size}
        className="mb-2"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-muted">{message}</p>
    </div>
  );
};

export default LoadingSpinner;