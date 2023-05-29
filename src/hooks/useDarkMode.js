import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    window.dispatchEvent(new Event('storage'));

    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);

    setMountedComponent(true);
  }, [theme]);

  window.addEventListener('storage', () => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  });

  return [theme, themeToggler, mountedComponent];
};
