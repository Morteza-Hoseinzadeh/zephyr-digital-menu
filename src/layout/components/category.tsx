'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import theme from '@/utils/theme/theme';
import ButtonComponent from '../custom/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CategorySectionProps {
  category: string[];
}

const swiper_config = {
  320: {
    slidesPerView: 2,
  },
  // Medium screens (tablets)
  480: {
    slidesPerView: 3,
  },
  // Large screens (small laptops)
  640: {
    slidesPerView: 4,
  },
  // Larger screens (laptops)
  768: {
    slidesPerView: 5,
  },
  // Extra large screens (desktops)
  1024: {
    slidesPerView: 6,
  },
  // Very large screens (wide desktops)
  1440: {
    slidesPerView: 7,
  },
};

const styles = {
  parent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    my: 4,
    gap: 2,
    overflow: 'hidden',
  },
  swiper: {
    width: '100%',
  },
  button: {
    fontSize: 22,
    transition: 'background-color 0.3s ease',
    borderRadius: '16px',
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.contrastText,
    padding: '8px 16px',
  },
};

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(category[0]);

  return (
    <Box sx={styles.parent}>
      <Swiper spaceBetween={10} breakpoints={swiper_config} allowTouchMove allowSlideNext allowSlidePrev style={styles.swiper}>
        {[...new Set(category)].map((item) => (
          <SwiperSlide key={item}>
            <ButtonComponent
              variant="contained"
              fullWidth
              style={{ ...styles.button, backgroundColor: selectedCategory === item ? theme.palette.secondary.main : 'transparent' }}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </ButtonComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CategorySection;
