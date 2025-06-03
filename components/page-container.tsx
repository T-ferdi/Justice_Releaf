"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/components/animations"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`container py-12 ${className}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  )
} 