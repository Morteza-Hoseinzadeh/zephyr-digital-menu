'use client';

import React, { useState } from 'react';

// Main layout
import Template from '@/layout/tempalte';

// Types
import { DetailsProps, ProductProps } from '@/utils/types/type.e';

// mock data
import { products, banner, logo, name } from '@/utils/mock/data';

// Cafe23 Route
export default function Page() {
  const [details, setDetails] = useState<DetailsProps>({ banner, logo, name });
  const [data, setData] = useState<ProductProps[]>(products);

  return <Template details={details} data={data} />;
}
