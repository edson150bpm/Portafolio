// src/components/TimelineItem.tsx
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FiChevronRight as _FiChevronRight } from 'react-icons/fi';

const FiChevronRight = _FiChevronRight as React.FC<IconBaseProps>;

interface Props {
  title: string;
  subtitle: string;
  date: string;
  children: ReactNode;
  linkText?: string;
  linkUrl?: string;
}

const TimelineItem: React.FC<Props> = ({
  title,
  subtitle,
  date,
  children,
  linkText,
  linkUrl
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-stretch mb-16">
      {/* Punto + línea con fade en la parte baja */}
      <div className="relative flex flex-col items-center mr-8">
        <span className="block w-3 h-3 rounded-full bg-yellow-400" />
        <span className="block flex-1 w-px bg-gray-300 dark:bg-gray-600 mt-1" />

        {/* Overlay degradado sobre la línea */}
        {!expanded && (
          <div
            className={`
              absolute bottom-0
              left-1/2 transform -translate-x-1/2
              h-12 w-px
              pointer-events-none
              bg-gradient-to-t
                from-white dark:from-gray-900
                to-transparent
            `}
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-yellow-400 mb-1">{title}</h3>
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
          {subtitle}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{date}</p>

        {/* Descripción con fade + expand */}
        <div className="relative mb-2">
          <div
            className={`
              prose prose-invert max-w-none
              text-gray-700 dark:text-gray-300
              transition-all duration-300 ease-in-out
              ${expanded
                ? 'max-h-none overflow-visible'
                : 'max-h-24 overflow-hidden'}
            `}
          >
            {children}
          </div>
          {!expanded && (
            <div
              className="
                absolute bottom-0 left-0 w-full h-12
                pointer-events-none
                bg-gradient-to-t
                from-white dark:from-gray-900
                to-transparent
              "
            />
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-cyan-500 hover:underline mb-4"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>

        {linkText && linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-yellow-400 font-semibold hover:underline"
          >
            {linkText}
            <FiChevronRight className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
