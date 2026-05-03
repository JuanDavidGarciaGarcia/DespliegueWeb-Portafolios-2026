"use client"

import { motion } from "framer-motion"
import { Code2, Database, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * KnowledgeSection Component
 * Displays expertise areas as animated cards with icons
 */

const knowledgeAreas = [
  {
    title: "Full Stack Dev",
    description: "Desarrollo completo de aplicaciones web con tecnologías modernas como React, Node.js y bases de datos relacionales y NoSQL.",
    icon: Code2,
  },
  {
    title: "Data Management",
    description: "Gestión y optimización de grandes volúmenes de datos, diseño de esquemas eficientes y pipelines de procesamiento.",
    icon: Database,
  },
  {
    title: "AI & Ethics",
    description: "Investigación en inteligencia artificial con enfoque en ética, curaduría de datos y desarrollo responsable de modelos.",
    icon: ShieldCheck,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function KnowledgeSection() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-2xl font-bold text-foreground mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Conocimientos
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {knowledgeAreas.map((area) => (
          <motion.div key={area.title} variants={cardVariants}>
            <Card className="h-full bg-card border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-default">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <area.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
