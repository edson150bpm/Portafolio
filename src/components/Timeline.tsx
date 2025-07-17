// src/components/Timeline.tsx
import React from 'react';
import TimelineItem from './TimelineItem';

export interface Experience {
  title: string;
  subtitle: string;
  date: string;
  description: React.ReactNode;
  linkText?: string;
  linkUrl?: string;
}

interface Props {
  entries: Experience[];
}

const Timeline: React.FC<Props> = ({ entries }) => (
  <div className="relative pl-4">
    {entries.map((exp, i) => (
      <TimelineItem
        key={i}
        title={exp.title}
        subtitle={exp.subtitle}
        date={exp.date}
        linkText={exp.linkText}
        linkUrl={exp.linkUrl}
      >
        {exp.description}
      </TimelineItem>
    ))}
  </div>
);

export default Timeline;
