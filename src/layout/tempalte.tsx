import React from 'react';

import Header from './components/header';
import RuleSection from './components/rules';

import { TemplateProps } from '@/utils/types/type.e';

const Template: React.FC<TemplateProps> = ({ details, data, rules }) => {
  return (
    <>
      <Header details={details} />
      <RuleSection rules={rules} />
    </>
  );
};

export default Template;
