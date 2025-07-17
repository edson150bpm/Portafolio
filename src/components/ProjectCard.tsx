import React from 'react';
import type { IconBaseProps } from 'react-icons';
import { MdOpenInNew as _MdOpenInNew } from 'react-icons/md';

// Cast al tipo de componente
const MdOpenInNew = _MdOpenInNew as React.FC<IconBaseProps>;

interface Props {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <li key={t} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">
            {t}
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        Ver código <MdOpenInNew className="ml-1" size={20} />
      </a>
    </div>
  );
}
