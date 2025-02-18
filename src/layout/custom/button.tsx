import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface ButtonComponentProps extends ButtonProps {
  children: React.ReactNode;
}

export default function ButtonComponent({ children, ...buttonProps }: ButtonComponentProps) {
  return (
    <Button {...buttonProps} sx={{ fontFamily: 'yekanbakh' }}>
      {children}
    </Button>
  );
}
