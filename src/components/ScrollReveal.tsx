// src/components/ScrollReveal.tsx
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function ScrollReveal({ children }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
