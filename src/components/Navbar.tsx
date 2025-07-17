import React, { useState, useEffect } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FiMenu as _FiMenu, FiX as _FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

const FiMenu = _FiMenu as React.FC<IconBaseProps>;
const FiX   = _FiX   as React.FC<IconBaseProps>;

interface Props {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const SECTIONS = ['Experiencia', 'Proyectos', 'Sobre mí', 'Contacto'];

export default function Navbar({ theme, setTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Colores base según tema
  const bgPill = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const textPill = theme === 'light'
    ? 'text-gray-800 hover:text-cyan-600'
    : 'text-gray-200 hover:text-cyan-400';

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-end md:justify-center py-4 px-4">
      <div
        className={`
          inline-flex items-center space-x-4
          rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          px-5
          ${scrolled
            ? // Glass effect al hacer scroll
              'bg-white/70 dark:bg-gray-800/70 backdrop-blur-md py-3'
            : // Estado inicial más grueso
              `${bgPill} py-2`
          }
        `}
      >
        {/* Enlaces (ocultos en móvil) */}
        <div className="hidden md:flex items-center space-x-6">
          {SECTIONS.map(sec => (
            <a
              key={sec}
              href={`#${sec.toLowerCase().replace(/\s+/g, '')}`}
              className={`transition-colors ${textPill}`}
            >
              {sec}
            </a>
          ))}
        </div>

        {/* Toggle de tema (oculto en móvil) */}
        <div className="hidden md:block">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <FiX  size={20} className={textPill} />
            : <FiMenu size={20} className={textPill} />
          }
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div
          className={`
            absolute top-full mt-2
            left-1/2 transform -translate-x-1/2
            w-11/12 max-w-xs
            ${bgPill} rounded-xl px-4 py-3
            shadow-lg
          `}
        >
          <ul className="flex flex-col space-y-3">
            {SECTIONS.map(sec => (
              <li key={sec}>
                <a
                  href={`#${sec.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-center transition-colors ${textPill}`}
                >
                  {sec}
                </a>
              </li>
            ))}
            <li className="flex justify-center pt-2 border-t border-gray-300">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
