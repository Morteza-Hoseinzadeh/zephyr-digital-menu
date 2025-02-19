import React from 'react';
import { TypographyProps as MuiTypographyProps, Typography } from '@mui/material';
import theme from '@/utils/theme/theme';

export interface TypographyComponentProps extends MuiTypographyProps {
  children: React.ReactNode;
}

export default function TypographyComponent({ children, ...typographyProps }: TypographyComponentProps) {
  return (
    <Typography {...typographyProps} sx={{ fontFamily: 'yekanbakh' }} color={theme.palette.text.primary}>
      {children}
    </Typography>
  );
}
