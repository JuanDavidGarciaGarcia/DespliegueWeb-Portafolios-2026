"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

/**
 * Footer Component
 * Clean, minimal footer with copyright and Next.js attribution
 */

export function Footer() {
  return (
    <motion.footer 
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          © 2024 Juan David García
        </p>
        <span className="hidden sm:inline">•</span>
        <p className="flex items-center gap-2">
          Hecho con
          <Heart className="w-4 h-4 text-primary animate-pulse" />
          y
          <Code className="w-4 h-4 text-primary" />
          usando Next.js
        </p>
      </div>
    </motion.footer>
  )
}
