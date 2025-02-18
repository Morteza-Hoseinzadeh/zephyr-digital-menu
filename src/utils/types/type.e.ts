import { Theme } from '@mui/material';

export type ChildrenProps = {
  chidlren: React.ReactNode;
};

export type ProductProps = {
  [key: string]: string;
};

export type DetailsProps = {
  logo: string;
  name: string;
  banner: string;
};

export type TemplateProps = {
  data: ProductProps[];
  details: DetailsProps;
};

export type ThemeProps = {
  [key: string]: Theme;
};
