"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * EducationSection Component
 * Displays academic background with institution, degree,
 * GPA, and extracurricular activities
 */

export function EducationSection() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-2xl font-bold text-foreground mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Educación
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Universidad de Antioquia</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">Ingeniería de Sistemas (8vo Semestre)</p>
                </div>
              </div>
              <Badge variant="outline" className="self-start sm:self-center text-primary border-primary/30">
                2023 - Actualidad
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* GPA */}
            <motion.div 
              className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Award className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Promedio Académico</p>
                <p className="text-2xl font-bold text-primary">4.32</p>
              </div>
            </motion.div>

            {/* Extracurricular */}
            <motion.div 
              className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Actividades Extracurriculares</p>
                <p className="text-muted-foreground text-sm">Semilleros de emprendimiento e innovación</p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
