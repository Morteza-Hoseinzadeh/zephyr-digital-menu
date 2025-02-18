import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import TypographyComponent from '../custom/typography';

const style = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
    borderRadius: '16px',
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

  const { logo, name } = details;
  const LogoAltName = logo ? logo.split('/').pop() || 'logo' : 'logo';

  return (
    <Box sx={style.header}>
      {logo && <Image src={logo} alt={LogoAltName} width={80} height={80} />}
      <TypographyComponent variant="h4" fontWeight="bold">
        {name}
      </TypographyComponent>
    </Box>
  );
};

export default Header;
