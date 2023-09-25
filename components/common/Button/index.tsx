import React from 'react';
import Button from '@mui/material/Button';

interface CButtom {
  text: string;
  fullWidth: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  sx: {
    mt: number;
    mb: number;
  };
}

function CButton({ text, fullWidth, variant, sx }: CButtom) {
  return (
    <Button type='submit' fullWidth={fullWidth} variant={variant} sx={sx}>
      {text}
    </Button>
  );
}

export default CButton;
