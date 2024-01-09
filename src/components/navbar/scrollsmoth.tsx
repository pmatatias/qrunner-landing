// src/components/SmoothScroll.tsx
import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const smoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');

      if (targetElement) {
        event.preventDefault();

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });

        // Update the URL
        if (targetId) {
          window.history.pushState(null, '', `${targetId}`);
        }
      }
    };

    const nav = document.querySelector('nav');
    if (nav) {
      nav.addEventListener('click', smoothScroll);
    }

    return () => {
      if (nav) {
        nav.removeEventListener('click', smoothScroll);
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
