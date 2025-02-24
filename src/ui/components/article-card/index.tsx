'use client';

import { Article } from '@/core/api/news/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/components/ui/card';
import Image from 'next/image';
import dayjs from 'dayjs';
import { cn } from '@/core/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import useBoolean from '@/ui/hooks/use-boolean';
import { useContext, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { LuX as CloseIcon } from 'react-icons/lu';
import Link from 'next/link';
import { ScrollContext } from '@/ui/boot/provider';

interface Props {
  article: Article;
  className?: string;
}

const ArticleCard: React.FC<Props> = ({ article, className }) => {
  const isOpenState = useBoolean();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const scrollContext = useContext(ScrollContext);

  useEffect(() => {
    if (isOpenState.value) {
      scrollContext.handleScrollOff();
    } else {
      scrollContext.handleScrollOn();
    }

    return scrollContext.handleScrollOn;
  }, [isOpenState.value, scrollContext]);

  const handleOpenCard = () => {
    if (isOpenState.value) {
      return;
    }

    isOpenState.setTrue();
  };

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isOpenState.value && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: 'blur(0px)',
            }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(6px)',
            }}
            exit={{
              opacity: 0,
              backdropFilter: 'blur(0px)',
            }}
            className={cn('bg-background/50 fixed inset-0 z-50')}
            onClick={isOpenState.setFalse}
          />
        )}
      </AnimatePresence>
      <motion.div
        layout
        layoutId={article.url}
        className={cn(
          isOpenState.value
            ? 'fixed inset-[40px] max-md:inset-0 z-50 bg-transparent'
            : 'h-full'
        )}
      >
        <Card
          className={cn(
            className,
            'overflow-hidden flex flex-col h-full duration-200 transition-scale cursor-pointer',

            !isOpenState.value ? 'hover:scale-105' : 'max-md:rounded-none'
          )}
          onClick={handleOpenCard}
          ref={cardRef}
        >
          <CardHeader>
            <div className='flex justify-between'>
              <div>
                <CardTitle className='line-clamp-2'>{article.title}</CardTitle>
                <CardDescription className='line-clamp-3 mt-3'>
                  {article.description}
                </CardDescription>
              </div>
              {isOpenState.value && (
                <Button
                  variant='ghost'
                  className='size-10'
                  onClick={isOpenState.setFalse}
                >
                  <CloseIcon className='text-primary !size-6' />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className='flex-1 flex flex-col'>
            <div
              className={cn(
                'relative h-[200px]',
                isOpenState.value && 'flex-1'
              )}
            >
              {article.urlToImage && (
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  className='w-full object-cover rounded-lg'
                  fill
                />
              )}
            </div>
            {isOpenState.value && (
              <div className='mt-4'>
                {article.content}{' '}
                <Link
                  href={article.url}
                  className='text-muted-foreground underline hover:text-primary transition-colors'
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                >
                  Read more
                </Link>
              </div>
            )}
          </CardContent>
          <CardFooter className='flex justify-between font-led text-xs text-muted-foreground  bg-muted py-3 items-start mt-auto'>
            <div className='flex flex-col mr-4'>
              <p>Authored by:</p>
              {<p className='line-clamp-1'>{article.author || '-- --'}</p>}
              {article.source.name && (
                <p className='line-clamp-2'>({article.source.name})</p>
              )}
            </div>
            {article.publishedAt && (
              <span className='text-right'>
                Published:
                <br />
                {dayjs(article.publishedAt).fromNow()}
              </span>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ArticleCard;
