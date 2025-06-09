import { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps =  {
  children: ReactNode;
  color?: string;
}

const Reveal = ({ children, color } : RevealProps) => {
  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial = "hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          delay: 0.75
        }}
        viewport={{
          amount: "all",
          once: true
        }}
      >
          {children}
      </motion.div>
      <motion.div 
        variants={{
          hidden: {left: 0},
          visible: {left: "100%"}
        }}
        initial = "hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          ease: "easeIn"
        }}
        viewport={{
          once: true
        }}
        className={`absolute top-4 bottom-4 left-0 right-0 bg-${color} z-20`}
      />
    </div>
  )
}

export default Reveal
