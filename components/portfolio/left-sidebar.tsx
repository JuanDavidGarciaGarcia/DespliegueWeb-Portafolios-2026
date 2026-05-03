"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress-bar"

/**
 * LeftSidebar Component
 * Contains personal information, contact details, languages, 
 * programming skills, and extra skills tags
 */

const languages = [
  { name: "Español", level: "Nativo", value: 100 },
  { name: "Inglés", level: "B1", value: 50 },
]

const programmingSkills = [
  { name: "Python", value: 85 },
  { name: "Java", value: 80 },
  { name: "JavaScript/Node.js", value: 75 },
  { name: "SQL/NoSQL", value: 70 },
]

const extraSkills = [
  "Docker",
  "MongoEngine",
  "Arquitectura Backend",
  "Gestión de Datos",
  "Comunicación Asertiva",
  "Trabajo en Equipo",
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function LeftSidebar() {
  return (
    <aside className="w-full lg:w-80 lg:left-0 lg:top-0 lg:h-screen lg:overflow-y-auto bg-card border-r border-border p-10 space-y-10">
      {/* Personal Info Section */}
      <motion.div 
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/20">
          <AvatarImage src="/image.png" alt="Juan David García García" />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold text-foreground">Juan David García García</h1>
        <p className="text-sm text-muted-foreground mt-1">Estudiante de Ingeniería de Sistemas</p>
      </motion.div>

      {/* Contact Information */}
      <motion.div 
        className="space-y-3"
        {...fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contacto</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>El Peñol, Antioquia</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span>+57 3225456701</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <a 
              href="mailto:juandavid.garcia@udea.edu.co" 
              className="hover:text-primary transition-colors"
            >
              juandavid.garcia@udea.edu.co
            </a>
          </div>
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div 
        className="space-y-4"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Idiomas</h2>
        <div className="space-y-3">
          {languages.map((lang) => (
            <ProgressBar 
              key={lang.name}
              label={`${lang.name} (${lang.level})`}
              value={lang.value}
            />
          ))}
        </div>
      </motion.div>

      {/* Programming Skills Section */}
      <motion.div 
        className="space-y-4"
        {...fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Lenguajes de Programación</h2>
        <div className="space-y-3">
          {programmingSkills.map((skill) => (
            <ProgressBar 
              key={skill.name}
              label={skill.name}
              value={skill.value}
            />
          ))}
        </div>
      </motion.div>

      {/* Extra Skills Tags */}
      <motion.div 
        className="space-y-4"
        {...fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Habilidades Extra</h2>
        <div className="flex flex-wrap gap-2">
          {extraSkills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </aside>
  )
}
