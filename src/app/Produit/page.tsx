"use client"

import { CTA, CardProduit, Typography } from "@/components";
import { dataProduit } from "@/lib/constant";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"

export default function ProduitPage() {
  const {ref, inView} = useInView({threshold: 0.5})
  return (
    <main ref={ref} className="min-h-[100dvh]">
      <section className="container pt-[20vh] flex flex-col justify-center items-center">
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
            <Typography variant="small" className="text-grey-500 uppercase mb-2">Produit</Typography>
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
              Les differents type de nos<br/> produits
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
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
            {
                dataProduit.map((card, index) => {
                  return (
                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, delay: index * 0.3}}
                    key={index}
                    >
                      <CardProduit className="border border-secondary-500 dark:border-grey-100"
                      >
                        <div className="p-4 rounded-full h-16 w-16 mx-auto bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary text-center flex items-center justify-center">
                          {card.icon}
                        </div>
                        <Typography variant="h3" className="font-bold mt-2 text-secondary-500 text-center dark:text-grey-100">{card.title}</Typography>
                      </CardProduit>
                    </motion.div>
                  );
                })
              }
              <CTA url="/Produit" className="bg-primary dark:bg-secondary-500 flex md:hidden dark:text-primary text-secondary-500 w-full md:w-fit min-w-[224px]">
                <Typography variant="small" className="uppercase text-[12px] font-bold">Voir plus</Typography>
              </CTA>
          </div>
      </section>
    </main>
  );
}
