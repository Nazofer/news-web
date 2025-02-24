import { useEffect } from 'react';

interface UseOutsideClick<T extends HTMLElement> {
  elementRef: React.RefObject<T | null> | null;
  callback(): void;
}

const useOutsideClick = <T extends HTMLElement>({
  elementRef,
  callback,
}: UseOutsideClick<T>) => {
  useEffect(() => {
    if (!elementRef?.current || !callback) return undefined;

    const handleClickOutside = (event: MouseEvent) => {
      if (!elementRef.current?.contains(event.target as HTMLElement))
        callback();
    };

    document.addEventListener('mousedown', handleClickOutside, true);

    return () =>
      document.removeEventListener('mousedown', handleClickOutside, true);
  }, [elementRef, callback]);
};

export { useOutsideClick };
