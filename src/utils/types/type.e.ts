import { Theme } from '@mui/material';

export type ChildrenProps = {
  chidlren: React.ReactNode;
};

export type ProductProps = {
  [key: string]: string;
};

export type DetailsProps = {
  [key: string]: string;
};

export type TemplateProps = {
  data: ProductProps[];
  details: DetailsProps;
  rules: string;
  category: string[];
};

export type ThemeProps = {
  [key: string]: Theme;
};
