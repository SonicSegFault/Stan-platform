import { ReactNode } from "react"
import { motion } from "framer-motion"
type ImageRevealProps = {
  children: ReactNode
}
const ImageReveal = ({ children } : ImageRevealProps) => {
  return (
    <div>
      <motion.div
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
            duration: 2,
            ease: "easeInOut"
        }}
        viewport={{
            once: true,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ImageReveal
