'use client';

import React, { useState } from 'react';

// Main layout
import Template from '@/layout/tempalte';

// Types
import { DetailsProps, ProductProps } from '@/utils/types/type.e';

// mock data
import { products, logo, name, notice, categories } from '@/utils/mock/data';

// Cafe23 Route
export default function Page() {
  const [details, setDetails] = useState<DetailsProps>({ logo, name });
  const [rules, setRules] = useState<string>(notice);
  const [category, setCategory] = useState<string[]>(categories);
  const [data, setData] = useState<ProductProps[]>(products);

  return <Template details={details} data={data} rules={rules} category={category} />;
}
