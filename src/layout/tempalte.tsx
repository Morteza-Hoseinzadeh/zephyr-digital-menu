import React from 'react';
import { TemplateProps } from '@/utils/types/type.e';
import Header from './components/header';
import HeroSection from './components/heroSection';

const Template: React.FC<TemplateProps> = ({ details, data }) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Template;
