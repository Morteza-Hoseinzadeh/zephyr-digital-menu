import React from 'react';
import { TypographyProps as MuiTypographyProps, Typography } from '@mui/material';

export interface TypographyComponentProps extends MuiTypographyProps {
  children: React.ReactNode;
}

export default function TypographyComponent({ children, ...typographyProps }: TypographyComponentProps) {
  return (
    <Typography {...typographyProps} sx={{ fontFamily: 'yekanbakh' }}>
      {children}
    </Typography>
  );
}
