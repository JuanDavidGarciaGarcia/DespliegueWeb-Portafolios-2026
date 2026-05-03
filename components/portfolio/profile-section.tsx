"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "./contact-dialog"

/**
 * ProfileSection Component
 * Hero section with name, photo, description and "Hire Me" CTA
 */

export function ProfileSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="mb-16">
      <motion.div 
        className="bg-card rounded-2xl p-8 shadow-sm border border-border"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Photo - visible on mobile and tablet */}
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar className="w-28 h-28 ring-4 ring-primary/20">
              <AvatarImage src="/image.jpg" alt="Juan David García García" />
              <AvatarFallback className="text-3xl bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Juan David García García
            </motion.h1>
            
            <motion.p 
              className="text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Estudiante de Ingeniería de Sistemas
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Estudiante de 8vo semestre de Ingeniería de Sistemas en la UdeA, con experiencia en proyectos 
              Full Stack e investigación de grandes volúmenes de datos e IA ética.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg"
                onClick={() => setIsContactOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 transition-all duration-300 hover:scale-105"
              >
                Contrátame
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
  )
}
