'use client';

import Link from 'next/link';
import Container from '@/ui/components/container';
import Divider from '@/ui/components/divider';
import routes, { routeNames } from '@/core/constants/routes';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const pathname = usePathname();

  const mappedRoutes = Object.entries(routes)
    .filter(([, value]) => value !== pathname)
    .map(([key, value], index) => (
      <React.Fragment key={key}>
        {index !== 0 && <p className='text-foreground'>&bull;</p>}
        <Link href={value}>
          <p className='text-primary-softDark font-led'>
            {routeNames[key as keyof typeof routeNames]}
          </p>
        </Link>
      </React.Fragment>
    ));

  return (
    <div className='bg-foreground/50 sticky top-0 z-[48]'>
      <header className='relative bg-background/85 backdrop-blur-sm'>
        <Container className='relative flex justify-between w-full shrink-0 items-center py-4'>
          <Link href='#'>
            <h2 className='text-2xl font-bold text-foreground'>
              {routeNames[pathname as keyof typeof routeNames] ?? 'News'}
            </h2>
          </Link>
          <div className='flex items-center gap-3'>{mappedRoutes}</div>
        </Container>
        <Divider />
      </header>
    </div>
  );
};

export default Header;
