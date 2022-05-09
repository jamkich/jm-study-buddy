import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    heigth: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimensions({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    });
  }, []);

  return dimensions;
};
