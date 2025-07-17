// src/components/ProjectCard.tsx
import React from 'react';
import type { IconBaseProps } from 'react-icons';
import { MdOpenInNew as _MdOpenInNew } from 'react-icons/md';
import { FaGithub as _FaGithub } from 'react-icons/fa';

const MdOpenInNew = _MdOpenInNew as React.FC<IconBaseProps>;
const FaGithub     = _FaGithub     as React.FC<IconBaseProps>;

interface Props {
  title: string;
  description: string;
  tech: string[];
  image: string;
  linkCode?: string;
  linkPreview?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  linkCode,
  linkPreview
}: Props) {
  return (
    <div
      className="
        w-full
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-lg overflow-hidden
        flex flex-col md:flex-row
      "
    >
      {/* Imagen */}
      <div className="w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>

          <ul className="flex flex-wrap gap-2 mb-4">
            {tech.map(t => (
              <li
                key={t}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {description}
          </p>
        </div>

        <div className="flex gap-3">
          {linkCode && (
            <a
              href={linkCode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <FaGithub className="mr-2" /> Código
            </a>
          )}
          {linkPreview && (
            <a
              href={linkPreview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <MdOpenInNew className="mr-2" /> Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
