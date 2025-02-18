import React from 'react';
import { HeroSectionProps } from '@/utils/types/type.e';
import { Box } from '@mui/material';

const style = {
  banner: {
    mt: 1.5,
    img: {
      width: '100%',
      borderRadius: '32px',
      boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
    },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ banner }) => {
  if (!banner) return null;
  const BannerAltName = banner ? banner.split('/').pop() || 'banner' : 'banner';

  return <Box sx={style.banner}>{banner && <img src={banner} alt={BannerAltName} />}</Box>;
};

export default HeroSection;
