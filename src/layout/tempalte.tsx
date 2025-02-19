import React from 'react';
import { TemplateProps } from '@/utils/types/type.e';
import Header from './components/header';

const Template: React.FC<TemplateProps> = ({ details, data }) => {
  return (
    <>
      <Header details={details} />
    </>
  );
};

export default Template;
