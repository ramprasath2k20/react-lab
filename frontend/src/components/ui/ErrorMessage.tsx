import React from 'react';
import { Alert } from 'react-bootstrap';

interface ErrorMessageProps {
  message: string;
  variant?: 'danger' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  variant = 'danger', 
  dismissible = false,
  onDismiss
}) => {
  return (
    <Alert 
      variant={variant} 
      dismissible={dismissible}
      onClose={onDismiss}
      className="my-4"
    >
      {message}
    </Alert>
  );
};

export default ErrorMessage;