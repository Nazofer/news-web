'use client';

import '@/core/utils/dayjs';
import { PropsWithChildren } from 'react';

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default Provider;
