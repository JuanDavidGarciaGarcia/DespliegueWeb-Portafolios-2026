"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Linkedin, Github, MapPin, Phone, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

/**
 * MobileNav Component
 * Collapsible navigation for mobile devices
 * Contains sidebar content in a sheet/drawer format
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

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/juan-david-garcia-garcia-64258b364/" },
  { name: "GitHub", icon: Github, href: "https://github.com/JuanDavidGarciaGarcia" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full bg-card shadow-lg border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-[320px] overflow-y-auto bg-card">
          <SheetHeader className="text-left mb-6">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
          </SheetHeader>

          <div className="space-y-8">
            {/* Personal Info */}
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4 ring-4 ring-primary/20">
                <AvatarImage src="/image.png" alt="Juan David García García" />
                <AvatarFallback className="text-xl bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-bold text-foreground">Juan David García García</h2>
              <p className="text-sm text-muted-foreground">Estudiante de Ingeniería de Sistemas</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contacto</h3>
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
                  <a href="mailto:juandavid.garcia@udea.edu.co" className="hover:text-primary transition-colors truncate">
                    juandavid.garcia@udea.edu.co
                  </a>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Idiomas</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <ProgressBar 
                    key={lang.name}
                    label={`${lang.name} (${lang.level})`}
                    value={lang.value}
                  />
                ))}
              </div>
            </div>

            {/* Programming Skills */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Lenguajes</h3>
              <div className="space-y-3">
                {programmingSkills.map((skill) => (
                  <ProgressBar 
                    key={skill.name}
                    label={skill.name}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>

            {/* Extra Skills */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {extraSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
