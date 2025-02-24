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
import { motion } from 'motion/react';
import useBoolean from '@/ui/hooks/use-boolean';
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';

interface Props {
  article: Article;
  className?: string;
}

const ArticleCard: React.FC<Props> = ({ article, className }) => {
  const isOpenState = useBoolean();
  const cardRef = useRef<HTMLDivElement | null>(null);

  console.log('article', article);

  useEffect(() => {
    if (isOpenState.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenState.value]);

  const handleOpenCard = () => {
    if (isOpenState.value) {
      return;
    }

    isOpenState.setTrue();
  };

  return (
    <div className='h-full w-full'>
      <div
        className={cn(
          'bg-background/50 backdrop-blur-sm fixed top-[62px] left-0 right-0 bottom-0 z-50',
          !isOpenState.value && 'opacity-0 pointer-events-none'
        )}
        onClick={isOpenState.setFalse}
      ></div>
      <motion.div
        layout
        layoutId={article.url}
        className={cn(
          isOpenState.value
            ? 'fixed top-[102px] left-[40px] right-[40px] bottom-[40px] z-50 bg-transparent'
            : 'h-full'
        )}
      >
        <Card
          className={cn(className, 'overflow-hidden flex flex-col h-full')}
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
                <Button variant='link' size='icon'></Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
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
              <div className='h-full flex-1'>{article.content}</div>
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
