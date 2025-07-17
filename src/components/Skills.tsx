import React from 'react';
import type { IconBaseProps } from 'react-icons';
import {
  MdCode    as _MdCode,
  MdStorage as _MdStorage,
  MdDevices as _MdDevices
} from 'react-icons/md';

// Cast al tipo de componente
const MdCode    = _MdCode    as React.FC<IconBaseProps>;
const MdStorage = _MdStorage as React.FC<IconBaseProps>;
const MdDevices = _MdDevices as React.FC<IconBaseProps>;

const skills: { name: string; Icon: React.FC<IconBaseProps> }[] = [
  { name: 'React',       Icon: MdCode },
  { name: 'TypeScript',  Icon: MdCode },
  { name: 'Tailwind CSS',Icon: MdDevices },
  { name: 'Node.js',     Icon: MdStorage },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
        >
          <Icon size={32} />
          <span className="mt-2">{name}</span>
        </div>
      ))}
    </div>
  );
}
