import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import TypographyComponent from '../custom/typography';
import ButtonComponent from '../custom/button';
import light from '@/utils/theme/theme';

const style = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    fontWeight: 'bold',
    borderRadius: '24px',
    fontSize: 18,
    backgroundColor: light.palette.background.paper,
    color: light.palette.text.primary,
    boxShadow: 'none',
  },
};

interface HeaderProps {
  details: {
    logo: string;
    name: string;
  };
}

const Header: React.FC<HeaderProps> = ({ details }) => {
  if (!details) return null;

  const { logo } = details;
  const LogoAltName = logo ? logo.split('/').pop() || 'logo' : 'logo';

  return (
    <Box sx={style.header}>
      {logo && <Image src={logo} alt={LogoAltName} width={80} height={80} />}
      <ButtonComponent size="small" variant="contained" style={style.button}>
        <span style={{ fontSize: 24 }}>🙌</span>سفارش حضوری
      </ButtonComponent>
    </Box>
  );
};

export default Header;
