"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { CardBlog, Typography } from "@/components";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { API_END_POINT, IMAGE_END_POINT } from "@/lib/utils";

// Interface pour les données du blog
interface BlogCard {
  id: string;
  img: string;
  title: string;
  cathegorie: string;
  description: string;
  date: string;
  url: string;
}

// Propriétés pour le composant Wrapcard
interface WrapcardProps {
  filteredBlogs: BlogCard[];
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogCard[]>([]);

  // Fetch des blogs à partir de l'API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(API_END_POINT + "posts/active");
        const data = await response.json();

        // Mapping des données récupérées pour correspondre à BlogCard
        const mappedData = data.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          cathegorie: blog.category.name, // Récupération du nom de la catégorie
          description: blog.description,
          date: new Date(blog.created_at).toLocaleDateString(),
          img: blog.cover_photo,
          url: `/Blog/${encodeURIComponent(blog.id)}`,
        }));

        setBlogs(mappedData);
        setFilteredBlogs(mappedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  // Filtrage des blogs en fonction du terme de recherche
  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <main ref={ref} className="min-h-[100dvh]">
      <section className="container flex flex-col items-center justify-center pt-[20vh]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 text-center"
          >
            Articles blog
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <Typography variant="p" className="text-grey-500 text-center mt-4">
            L&apos;agence propose une gamme complète de services incluant des
            compétences techniques, du design et une compréhension des affaires.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.3,
            duration: 0.7,
          }}
          className="flex items-center justify-between rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-[50vw] mt-4"
        >
          <input
            type="text"
            id="name"
            placeholder="Commencez à taper ici"
            className="inline-block w-full placeholder:text-grey-500 px-4 py-2 outline-none bg-inherit"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="flex-1 p-4">
            <Search />
          </button>
        </motion.div>
      </section>

      <Wrapcard filteredBlogs={filteredBlogs} />
    </main>
  );
}

// Composant Wrapcard pour afficher les cartes des blogs
function Wrapcard({ filteredBlogs }: WrapcardProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="container">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
        {filteredBlogs.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Link href={card.url} key={card.id}>
              <CardBlog>
                <Image
                  src={IMAGE_END_POINT + "storage/" + card.img}
                  alt={card.title}
                  priority
                  className="object-cover w-full h-44"
                  width={500}
                  height={200}
                />
                <div className="p-5 flex flex-col justify-start">
                  <Typography
                    variant="small"
                    className="mb-3 text-secondary-500 text-xs font-semibold tracking-wide uppercase"
                  >
                    {card.cathegorie}
                  </Typography>
                  <Typography
                    variant="h3"
                    className="font-bold leading-5 text-secondary-500"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-grey-500 [&:not(:first-child)]:mt-4 line-clamp-2"
                  >
                    {card.description}
                  </Typography>
                  <Typography
                    variant="small"
                    className="[&:not(:first-child)]:mt-4"
                  >
                    {card.date}
                  </Typography>
                </div>
              </CardBlog>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
