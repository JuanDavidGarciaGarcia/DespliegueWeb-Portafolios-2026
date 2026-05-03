"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectDialog } from "./project-dialog"

/**
 * PortfolioSection Component
 * Horizontal scrolling gallery of project cards
 * Each card has a "Learn More" button that opens a detail modal
 */

const projects = [
  {
    id: "festivo-api",
    title: "Proyecto API festivos Colombia",
    shortDescription: "CRUD distribuido con arquitectura escalable",
    image: "/projects/mongoengine-api.jpg",
    fullDescription: "Sistema de API REST completo desarrollado con java y Spring Boot donde se organizan los endpoints de forma modular y escalable.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/JuanDavidGarciaGarcia/apifestivofecha",
  },
  {
    id: "data-curation",
    title: "Investigación Curaduría de Datos",
    shortDescription: "Optimización de modelos IA con datos curados",
    image: "/projects/data-curation.jpg",
    fullDescription: "Proyecto de investigación enfocado en técnicas de curaduría de datos para mejorar el rendimiento de modelos de inteligencia artificial. Análisis de sesgos, limpieza de datasets y metodologías éticas en IA.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter", "SQL"],
    githubUrl: "https://github.com/JuanDavidGarciaGarcia/Proyecto-Kaggle-UDEA-ai4eng-20252---Pruebas-Saber-Pro-Colombia",
  },
  {
    id: "inventory-platform",
    title: "Plataforma Inventario",
    shortDescription: "Almacen de zapatos",
    image: "/projects/ecommerce.jpg",
    fullDescription: "Desarrollo de una plataforma gestión de inventario con autenticación de usuarios.",
    technologies: ["React", "JavaScript", "PostgreSQL", "CSS", "AWS", "Typescript"],
    githubUrl: "https://github.com/JuanDavidGarciaGarcia/PaginaWeb--front-and-backend-",
  },
  {
    id: "app-gym",
    title: "Gestor de rutinas de gimnasio",
    shortDescription: "Aplicación de rutinas y llevar tus ejercicios",
    image: "/projects/task-manager.jpg",
    fullDescription: "Aplicación web para gestión de rutinas de gimnasio, seguimiento de ejercicios y progreso físico. Funcionalidades incluyen creación de rutinas personalizadas, registro de entrenamientos y análisis de rendimiento.",
    technologies: ["Next.js", "React", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/CarlosZuluagaU/Vital-App",
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <motion.h2 
          className="text-2xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portafolio
        </motion.h2>

        {/* Scroll Controls */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Desplazar a la izquierda</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Desplazar a la derecha</span>
          </Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[320px] snap-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-card border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground line-clamp-1">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {project.shortDescription}
                </CardDescription>
                
                <Button 
                  variant="outline"
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  Saber más
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectDialog 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
