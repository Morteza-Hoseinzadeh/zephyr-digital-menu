import React from 'react';

import { motion } from 'framer-motion';

import theme from '@/utils/theme/theme';
import { ThemeProvider } from '@mui/material';

import Header from './components/header';
import RuleSection from './components/rules';

import { TemplateProps } from '@/utils/types/type.e';
import CategorySection from './components/category';
import Product from './components/product';

const Template: React.FC<TemplateProps> = ({ details, data, rules, category }) => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Header details={details} />
        <RuleSection rules={rules} />
        <CategorySection category={category} />
        <Product data={data} />
      </motion.div>
    </ThemeProvider>
  );
};

export default Template;
