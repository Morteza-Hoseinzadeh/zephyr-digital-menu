import { Box } from '@mui/material';
import React from 'react';
import TypographyComponent from '../custom/typography';
import theme from '@/utils/theme/theme';

interface RuleSectionProps {
  rules: string;
}

const styles = {
  parent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    p: 2,
  },
  child: {
    textAlign: 'center',
  },
};

const RuleSection: React.FC<RuleSectionProps> = ({ rules }) => {
  return (
    rules !== '' && (
      <Box sx={styles.parent}>
        <Box sx={styles.child}>
          <TypographyComponent variant="h4" fontWeight={'bold'} style={{ color: 'rgba(255,255,255,1) !important' }}>
            *توجه*
          </TypographyComponent>
        </Box>
        <Box sx={styles.child}>
          <TypographyComponent variant="subtitle1" style={{ color: 'rgba(255,255,255,1) !important' }}>
            {rules}
          </TypographyComponent>
        </Box>
      </Box>
    )
  );
};

export default RuleSection;
