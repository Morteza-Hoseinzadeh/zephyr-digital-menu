import React from 'react';

interface DetailsProps {
  details: {
    name: string;
    logo: string;
  };
}

const header: React.FC<DetailsProps> = ({ details }) => {
  return (
    <div>
      <p></p>
    </div>
  );
};

export default header;
