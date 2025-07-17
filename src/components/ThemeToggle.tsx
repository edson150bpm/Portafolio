// src/components/ThemeToggle.tsx
import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { MdDarkMode as _MdDarkMode, MdLightMode as _MdLightMode } from 'react-icons/md';
import type { Theme } from '../hooks/useTheme';

const MdDarkMode  = _MdDarkMode  as React.FC<{ className?: string }>;
const MdLightMode = _MdLightMode as React.FC<{ className?: string }>;

interface Props {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Cambiar tema"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative inline-flex items-center flex-shrink-0
        h-6 w-14 rounded-full
        transition-colors duration-300 ease-in-out
        ${isDark ? 'bg-gray-700' : 'bg-gray-300'}
      `}
    >
      {/* Icono luz */}
      <MdLightMode
        className="absolute left-1 top-1/2 transform -translate-y-1/2
                   w-4 h-4 text-yellow-400"
      />

      {/* Icono noche */}
      <MdDarkMode
        className="absolute right-1 top-1/2 transform -translate-y-1/2
                   w-4 h-4 text-gray-900"
      />

      {/* Knob deslizante */}
      <span
        className={`
          inline-block h-5 w-5 transform bg-white rounded-full shadow-md
          transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-8' : 'translate-x-1'}
        `}
      />
    </button>
  );
}
