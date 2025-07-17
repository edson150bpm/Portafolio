import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export type Theme = 'light' | 'dark';

export default function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const getInitial = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
