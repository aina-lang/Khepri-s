"use client"

import { Typography } from "@/components"
import { useInView } from "react-intersection-observer"
import {motion} from "framer-motion"

function AproposPage() {
  const {ref, inView} = useInView({threshold:0.5})
  return (
    <div ref={ref} className="min-h-[100dvh]">
      <section className="container pt-[20vh] h-screen flex flex-col justify-center items-center">
      <motion.div
          initial={{scale:0, opacity:0}}
          animate={inView ? {scale:1, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.1,
            duration:0.7
          }}
          >
            <Typography variant="small" className="text-grey-500 uppercase mb-2">A propos</Typography>
          </motion.div>
          <motion.div
          initial={{y:50, opacity:0}}
          animate={inView ? {y:0, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.1,
            duration:0.7
          }}
          >
            <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 text-center">
              A propos de nous
            </Typography>
          </motion.div>
          <motion.div
          initial={{y:50, opacity:0}}
          animate={inView ? {y:0, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.2,
            duration:0.7
          }}
          >
            <Typography variant="p" className="text-secondary-100 text-center dark:text-grey-100 mt-4">
              Une equipe pour SMIC. Competences techniques, design,<br/> capacite a se mettre a la place du commercant
            </Typography>
          </motion.div>
      </section>
    </div>
  )
}

export default AproposPage