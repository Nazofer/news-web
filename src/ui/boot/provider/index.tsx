'use client';

import '@/core/utils/dayjs';
import Header from '@/ui/components/header';
import useEffectOnce from '@/ui/hooks/use-effect-once';
import {
  useOverlayScrollbars,
  UseOverlayScrollbarsParams,
} from 'overlayscrollbars-react';
import React, { PropsWithChildren, useRef } from 'react';

const contextNoAction = (context: string) => () => {
  throw new Error(
    `The component is not wrapped in ${context} Context Provider!`
  );
};

const options = {
  scrollbars: {
    autoHide: 'scroll',
    autoHideDelay: 800,
  },
} satisfies UseOverlayScrollbarsParams['options'];

interface ScrollContextValues {
  handleScrollOff: () => void;
  handleScrollOn: () => void;
}

export const ScrollContext = React.createContext<ScrollContextValues>({
  handleScrollOff: contextNoAction('Scroll'),
  handleScrollOn: contextNoAction('Scroll'),
});

const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLBodyElement>(null);
  const [initialize, instance] = useOverlayScrollbars({
    options,
    defer: true,
  });

  useEffectOnce(() => {
    if (ref.current) {
      initialize(ref.current);
    }
  });

  const handleScrollOff = () => {
    document.body.style.overflow = 'hidden';
    instance()?.destroy();
  };

  const handleScrollOn = () => {
    document.body.style.overflow = 'auto';

    if (initialize && ref.current) {
      initialize(ref.current);
    } else {
      throw new Error('OverlayScrollbars instance is not initialized');
    }
  };

  return (
    <ScrollContext.Provider value={{ handleScrollOff, handleScrollOn }}>
      <body ref={ref} className='dark'>
        <Header />
        <main className='mt-[64px]'>{children}</main>
      </body>
    </ScrollContext.Provider>
  );
};

export default RootProvider;
