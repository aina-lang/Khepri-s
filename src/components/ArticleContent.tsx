"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { CTA, Typography } from "@/components";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { API_END_POINT, IMAGE_END_POINT } from "@/lib/utils";

interface ArticleContentProps {
  blog: any;
}

export default function ArticleContent({ blog }: ArticleContentProps) {
  const [data, setData] = useState<ArticleContentProps["blog"] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_END_POINT + "posts/active/" + blog);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <main className="min-h-[100dvh] pt-[15vh] overflow-x-hidden">
      <CTA
        url="/Blog/"
        className="absolute z-50 left-[10px] md:left-[70px] text-grey-100"
      >
        <ArrowLeft />
        Blog / {data.category.name}
      </CTA>
      <div className="w-full -z-50 h-[250px] md:h-[450px] relative">
        <Image
          src={IMAGE_END_POINT + "storage/" + data.cover_photo}
          alt={data.title}
          priority
          quality={95}
          layout="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-500 opacity-60"></div>

        <div className="absolute top-1/2 left-1/2 md:left-[29.222222%] transform -translate-x-1/2 -translate-y-1/2 w-[90vw] px-0 md:px-4 md:w-[50vw] text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "just",
              stiffness: 125,
              delay: 0.1,
              duration: 0.3,
            }}
          >
            <Typography variant="h1" className="mb-4">
              {data.title}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "just",
              stiffness: 125,
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <Typography variant="small">{data.date}</Typography>
          </motion.div>
        </div>
      </div>
      <div className="container px-8 py-4 md:px-28 md:pb-28 md:pt-16">
        <Typography
          variant="p"
          className="text-secondary-500 dark:text-grey-100"
        >
          {data.description}
        </Typography>
      </div>
    </main>
  );
}
