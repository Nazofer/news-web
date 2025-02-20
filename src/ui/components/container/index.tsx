import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className='flex h-full w-full px-10'>
      <div
        className={twMerge(
          'max-w-[1200px] 2xl:max-w-[1500px] w-full mx-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
