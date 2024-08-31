"use client";

import { Typography } from "@/components";
import { CardServices } from "@/lib/constant";
import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";

interface CardServicesProp {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element; 
}

export default function ServicePage() {
  return (
    <main className="min-h-[100dvh]">
      <section className="container py-[20vh]">
        <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 mb-16 text-center">
          Nos Service
        </Typography>
        <VerticalTimeline lineColor="" className="-z-50">
          {CardServices.map((item: CardServicesProp, index: number) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                id={item.id}
                contentStyle={{
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                iconStyle={{
                  background: "rgb(15, 15, 15)",
                  fontSize: "1.5rem",
                  color:"rgb(245, 191, 4)",
                  boxShadow:"0 0 0 4px rgb(245, 191, 4),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)"
                }}
                icon={item.icon}
              >
                <ServiceCard item={item} index={index} />
              </VerticalTimelineElement>
            </Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </main>
  );
}

const ServiceCard = ({ item, index }: { item: CardServicesProp; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <Typography variant="h3" className="text-secondary-500">
        {item.title}
      </Typography>
      <Typography variant="p" className="text-secondary-100">
        {item.description}
      </Typography>
    </motion.div>
  );
};
