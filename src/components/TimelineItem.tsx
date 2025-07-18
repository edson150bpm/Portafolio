// src/components/TimelineItem.tsx
import React, { useState, useRef, useLayoutEffect } from 'react'
import type { ReactNode } from 'react'
import type { IconBaseProps } from 'react-icons'
import { FiChevronRight as _FiChevronRight } from 'react-icons/fi'

const FiChevronRight = _FiChevronRight as React.FC<IconBaseProps>

interface Props {
  title: string
  subtitle: string
  date: string
  children: ReactNode
  linkText?: string
  linkUrl?: string
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  children,
  linkText,
  linkUrl,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  // Cada vez que montamos o cambia expanded, recalculamos la altura
  useLayoutEffect(() => {
    if (contentRef.current) {
      const full = contentRef.current.scrollHeight
      setHeight(expanded ? full : 96) // 96px == 6rem (~4 líneas)
    }
  }, [expanded])

  return (
    <div className="flex items-stretch mb-16">
      {/* PUNTO + LÍNEA */}
      <div className="relative flex flex-col items-center mr-8">
        <span className="block w-3 h-3 rounded-full bg-yellow-400" />
        <span className="block flex-1 w-px bg-gray-300 dark:bg-gray-600 mt-1" />
      </div>

      {/* CONTENIDO */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-yellow-400 mb-1">{title}</h3>
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
          {subtitle}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{date}</p>

        {/* DESCRIPCIÓN ANIMADA */}
        <div
          ref={contentRef}
          style={{
            height: `${height}px`,
            transition: 'height 0.4s ease',
            overflow: 'hidden',
          }}
        >
          <div className="prose prose-invert text-gray-700 dark:text-gray-300">
            {children}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-cyan-500 hover:underline my-4"
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
  )
}
