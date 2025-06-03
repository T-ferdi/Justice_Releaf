import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const bounceIn: Variants = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export const scaleIn: Variants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
} 