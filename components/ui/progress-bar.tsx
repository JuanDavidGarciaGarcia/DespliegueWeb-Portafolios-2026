"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * ProgressBar Component
 * A reusable animated progress bar with label support
 * Used for displaying skill levels and language proficiency
 */
interface ProgressBarProps {
  label: string
  value: number
  className?: string
  showPercentage?: boolean
}

export function ProgressBar({ 
  label, 
  value, 
  className,
  showPercentage = true 
}: ProgressBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-foreground">{label}</span>
        {showPercentage && (
          <span className="text-muted-foreground">{value}%</span>
        )}
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
