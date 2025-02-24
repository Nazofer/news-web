'use client';

import Link from 'next/link';
import Container from '@/ui/components/container';
import Divider from '@/ui/components/divider';
import routes, { routeNames } from '@/core/constants/routes';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { cn } from '@/core/lib/utils';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 64);
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

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
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 duration-200',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <header className='relative bg-baackground/85 backdrop-blur-sm'>
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
