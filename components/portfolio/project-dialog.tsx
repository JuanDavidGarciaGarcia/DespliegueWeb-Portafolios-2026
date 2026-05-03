"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * ProjectDialog Component
 * Modal displaying detailed project information
 * Includes tech stack badges and GitHub link
 */

interface Project {
  id: string
  title: string
  shortDescription: string
  image: string
  fullDescription: string
  technologies: string[]
  githubUrl: string
}

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Full Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Tecnologías utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              asChild
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Ver en GitHub
              </a>
            </Button>
            <Button 
              variant="outline"
              onClick={onClose}
              className="hover:bg-secondary transition-all duration-300"
            >
              Cerrar
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
