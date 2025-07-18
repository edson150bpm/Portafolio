import React, { useState, useRef, useLayoutEffect } from 'react'

interface Props {
  title: string
  description: string
  tech: string[]
  image: string
  onImageClick?: () => void   // <-- recibe el callback
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  onImageClick,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const COLLAPSED_HEIGHT = 96

  useLayoutEffect(() => {
    if (contentRef.current) {
      const full = contentRef.current.scrollHeight
      setHeight(expanded ? full : COLLAPSED_HEIGHT)
    }
  }, [expanded, description])

  const isLong = description.length > 150

  return (
    <div className="
      h-full flex flex-col
      bg-gradient-to-br from-cyan-50 via-white to-cyan-50
      dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
      p-6 rounded-lg shadow-lg
      transform transition-transform duration-300 hover:scale-105
      overflow-hidden
    ">
      {/* Imagen: aquí va el click */}
      <img
        className="w-full h-48 object-cover cursor-pointer rounded-md"
        src={image}
        alt={title}
        onClick={onImageClick}
      />

      {/* Contenido */}
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="
          text-2xl font-semibold mb-2
          text-transparent bg-clip-text
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
          animate-pulse
        ">
          {title}
        </h3>

        {/* Descripción animada */}
        <div
          ref={contentRef}
          style={{
            height: `${height}px`,
            transition: 'height 0.4s ease',
            overflow: 'hidden',
          }}
          className="text-gray-700 dark:text-gray-300 text-base mb-2"
        >
          {description}
        </div>

        {isLong && (
          <button
            onClick={e => {
              e.stopPropagation()
              setExpanded(!expanded)
            }}
            className="self-start text-sm text-cyan-500 hover:underline mb-4"
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map(t => (
          <span
            key={t}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
