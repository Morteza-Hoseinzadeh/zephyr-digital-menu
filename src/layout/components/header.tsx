import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import TypographyComponent from '../custom/typography';

interface DetailsProps {
  details: {
    [key: string]: string;
  };
}

const header: React.FC<DetailsProps> = ({ details }) => {
  const { name, logo } = details;
  if (!name || !logo) return null;

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={2}>
      {name && (
        <Box mt={1}>
          <TypographyComponent variant="h3" component="h3" fontWeight={'bold'}>
            {name}
          </TypographyComponent>
        </Box>
      )}
      {logo && (
        <Box>
          <Image src={logo} alt={`${name}.png`} width={100} height={100} />
        </Box>
      )}
    </Box>
  );
};

export default header;
