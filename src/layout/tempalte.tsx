import React from 'react';

import { motion } from 'framer-motion';

import Header from './components/header';
import RuleSection from './components/rules';

import { TemplateProps } from '@/utils/types/type.e';

const Template: React.FC<TemplateProps> = ({ details, data, rules }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Header details={details} />
      <RuleSection rules={rules} />
    </motion.div>
  );
};

export default Template;
