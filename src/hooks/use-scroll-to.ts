import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollTo };
};