"use client"

import { motion } from "framer-motion"
import { Linkedin, Github } from "lucide-react"

/**
 * RightSidebar Component
 * A vertical bar with social media icons (LinkedIn, GitHub)
 * Features amber hover effects and subtle animations
 */

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/juan-david-garcia-garcia-64258b364/",
    label: "Perfil de LinkedIn"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/JuanDavidGarciaGarcia",
    label: "Perfil de GitHub"
  }
]

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex lg:w-20 lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:flex-col lg:items-center lg:justify-center bg-card border-l border-border">
      <motion.div 
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            whileHover={{ rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>
      
      {/* Decorative vertical line */}
      <motion.div 
        className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent -z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </aside>
  )
}
