import React from 'react';
import { ProductProps } from '@/utils/types/type.e';
import { Box, Grid2 } from '@mui/material';
import TypographyComponent from '../custom/typography';
import theme from '@/utils/theme/theme';
import Image from 'next/image';
import ButtonComponent from '../custom/button';

interface ProductPropsTypes {
  data: ProductProps[];
}

interface CardsItemHeaderProps {
  category: string;
}

const style = {
  parent: { my: 8 },
  child: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: theme.palette.background.paper,
    width: '250px',
    py: 0.5,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '60px',
    zIndex: 1,
  },
  divider: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.secondary.main,
    top: 27,
  },
  card_parent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.secondary.main}`,
    p: 2,
    borderRadius: '16px',
  },
  card_child: {
    display: 'flex',
    width: '100%',
    justifyContent: 'left',
    gap: '4px',
    flexDirection: 'column',
    mr: 1,
  },
  button: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    fontSize: 14,
    borderRadius: '12px',
  },
};

const CardsItemHeader: React.FC<CardsItemHeaderProps> = ({ category }) => (
  <Box textAlign={'center'} sx={style.child}>
    <Box sx={style.divider}></Box>
    <Box sx={style.title}>
      <TypographyComponent component={'span'} fontSize={30} fontWeight={'bold'}>
        {category}
      </TypographyComponent>
    </Box>
  </Box>
);
const CardsItem: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  return (
    <Grid2 container spacing={6} mx={0.5} mt={4}>
      {products?.map((item, index) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={style.card_parent}>
          <img src={item?.img} alt={`${item?.name}-png`} width={'30%'} height={'30%'} />
          <Box sx={style.card_child}>
            <TypographyComponent component={'span'} fontSize={24} style={{ color: 'white !important' }}>
              {item?.name}
            </TypographyComponent>
            <TypographyComponent component={'span'} fontSize={14}>
              {item?.description}
            </TypographyComponent>
            <Box textAlign={'left'}>
              <TypographyComponent component={'span'} fontSize={22} style={{ color: 'white !important' }}>
                {item?.price}
              </TypographyComponent>
            </Box>
            <Box mt={2}>
              <ButtonComponent variant="contained" style={style.button}>
                افزودن به سبد خرید
              </ButtonComponent>
            </Box>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

// Main Component
const Product: React.FC<ProductPropsTypes> = ({ data }) => {
  const groupedData = data.reduce(
    (acc, product) => {
      const categories = product.category.split(',');
      categories.map((category) => {
        const trimedCategory = category.trim();
        if (!acc[trimedCategory]) {
          acc[trimedCategory] = [];
        }
        acc[trimedCategory].push(product);
      });

      return acc;
    },
    {} as Record<string, ProductProps[]>
  );

  return Object.entries(groupedData).map(([category, products]) =>
    category.length > 0 ? (
      <Box key={category} sx={style.parent}>
        <CardsItemHeader category={category} />
        <CardsItem products={products} />
      </Box>
    ) : null
  );
};

export default Product;
