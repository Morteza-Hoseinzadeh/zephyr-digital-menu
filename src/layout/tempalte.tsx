import React from 'react';
import Header from './components/header';
import { TemplateProps } from '@/utils/types/type.e';

const Template: React.FC<TemplateProps> = ({ details, data }) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Template;
