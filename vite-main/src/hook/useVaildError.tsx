import { useState, useEffect } from 'react';

export const useErrorMessage = (value: string, validationFunction: (value: string) => string | undefined) => {
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setError(validationFunction(value));
  }, [value, validationFunction]);

  return error;
};