"use client";

import { sendEmail } from "@/actions/sendEmail";
import Image from "next/image";
import { home_1, home_2, home_3 } from "../asset";
import { CTA, CardBlog, CardProduit, Typography } from "../components";
import { Phone, AppWindowMacIcon, SendIcon } from "lucide-react";
import { API_END_POINT, IMAGE_END_POINT, stylesIcon } from "../lib/utils";
import { CardServices, dataProduit } from "../lib/constant";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface BlogCard {
  id: string;
  img: string;
  title: string;
  cathegorie: string;
  description: string;
  date: string;
  url: string;
}

const iconMap = {
  AppWindowMacIcon,
};
export default function Home() {
  return (
    <main>
      <Heros />
      <Service />
      <Produit />
      <Apropos />
      <Blog />
      <Contact />
    </main>
  );
}

function Heros() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  return (
    <section ref={ref} className="container overflow-x-hidden">
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="col-span-12 md:col-span-6 md:py-8 pt-[20vh] md:h-[100vh] h-screen flex flex-col justify-center items-center md:items-start"
        >
          <Typography variant="small" className="text-grey-500 uppercase mb-2">
            Acceille
          </Typography>
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 md:text-start text-center"
          >
            Nous somme la pour <br /> concretiser votre projet de <br /> reve.
          </Typography>
          <Typography
            variant="p"
            className="text-secondary-100 dark:text-grey-100 md:text-start text-center"
          >
            L&apos;agence propose une gamme complete de services <br />{" "}
            comprenant des competences techniques du design et <br /> une
            comprehension du monde des affaires.
          </Typography>

          <div className="flex items-center gap-4 mt-4 md:flex-row flex-col">
            <CTA
              url="/Service"
              className="flex items-center justify-center bg-primary text-secondary-500 py-4 md:py-2 h-full w-full md:w-fit min-w-[224px] max-w-[384px] mt-4"
            >
              <Typography
                variant="small"
                className="uppercase text-[12px] font-bold"
              >
                Comment nous travaillon
              </Typography>
            </CTA>
            <CTA
              url="/Contact"
              className="flex items-center justify-center space-x-2 md:space-x-4 border dark:border-grey-100 border-secondary-500 text-secondary-500 dark:text-grey-100 h-full w-full md:w-fit min-w-[224px] max-w-[384px] mt-4"
            >
              <Typography
                variant="small"
                className="uppercase text-[12px] font-bold"
              >
                Contactez-nous
              </Typography>
              <Phone fill={`${stylesIcon.black}`} strokeWidth={0} />
            </CTA>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="col-span-12 md:col-span-6 py-8 flex items-start md:items-end justify-center md:justify-end"
        >
          <Image src={home_1} alt="Heros" priority width={450} />
        </motion.div>
      </div>
    </section>
  );
}

function Service() {
  const { ref, inView } = useInView({ threshold: 0.64 });
  return (
    <section ref={ref} className="container overflow-x-hidden">
      <div className=" flex justify-center gap-8 md:justify-between flex-wrap mt-16 md:mt-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className=" md:pt-8 md:pb-24 justify-center flex flex-col"
        >
          <Typography
            variant="small"
            className="text-grey-500 md:text-start text-center uppercase mb-2"
          >
            Service
          </Typography>
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 md:text-start text-center"
          >
            Comment notre agence
            <br /> peut vous aider
          </Typography>
          <Typography
            variant="p"
            className="text-secondary-100 dark:text-grey-100 md:text-start text-center"
          >
            L&apos;agence propose une gamme complète de services <br />{" "}
            comprenant des compétences techniques du design et <br /> une
            compréhension du monde des affaires.
          </Typography>
          <CTA
            url="/Service"
            className="bg-primary text-secondary-500 md:mx-0 mx-auto w-fit max-w-[384px] min-w-[224px] mt-4"
          >
            <Typography
              variant="small"
              className="uppercase text-[12px] font-bold"
            >
              Découvrir tout
            </Typography>
          </CTA>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="py-8 flex md:justify-center justify-end"
        >
          <Image
            src={home_2}
            alt="Produit"
            quality={95}
            className="w-[480px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Produit() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <section ref={ref} className="bg-primary">
      <div className="container py-8 h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <Typography variant="small" className="text-grey-500 uppercase mb-2">
            Produit
          </Typography>
        </motion.div>
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
          <Typography variant="h1" className="text-secondary-500 text-center">
            Les differents type de
            <br /> produits
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
          <Typography
            variant="p"
            className="text-secondary-100 text-center mt-4"
          >
            Une equipe pour SMIC. Competences techniques, design,
            <br /> capacite a se mettre a la place du commercant
          </Typography>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
          {dataProduit.slice(0, 3).map((card, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className={`${
                  index >= CardServices.length - (CardServices.length - 1)
                    ? "hidden md:block"
                    : ""
                }`}
                key={index}
              >
                <CardProduit>
                  <div className="p-4 rounded-full h-16 w-16 mx-auto bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary text-center flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Typography
                    variant="h3"
                    className="font-bold mt-2 text-secondary-500 text-center dark:text-grey-100"
                  >
                    {card.title}
                  </Typography>
                </CardProduit>
              </motion.div>
            );
          })}
          <CTA
            url="/Produit"
            className="bg-secondary-500 flex md:hidden text-primary w-full md:w-fit min-w-[224px]"
          >
            <Typography
              variant="small"
              className="uppercase text-[12px] font-bold"
            >
              Voir plus
            </Typography>
          </CTA>
        </div>
      </div>
    </section>
  );
}

function Apropos() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <section ref={ref} className="container overflow-x-hidden">
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="order-2 md:order-1 col-span-12 md:col-span-6 py-8 flex items-start md:items-center justify-center md:justify-start"
        >
          <Image src={home_3} alt="Apropos" priority width={450} />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="order-1 md:order-2 col-span-12 md:col-span-6 py-8 h-auto md:h-[100vh] flex flex-col justify-center items-center md:items-start"
        >
          <Typography variant="small" className="text-grey-500 uppercase mb-2">
            A Proppos
          </Typography>
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 md:text-start text-center"
          >
            Innovation agile pour <br />
            Solution web et
            <br /> Mobile
          </Typography>
          <Typography
            variant="p"
            className="text-secondary-100 dark:text-grey-100 md:text-start text-center"
          >
            Collaboration Profonde avec les commercant, pour un
            <br />
            Partenariat a long terme et un travail en equipe
          </Typography>

          <CTA
            url="/Apropos"
            className="bg-primary text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4"
          >
            <Typography
              variant="small"
              className="uppercase text-[12px] font-bold"
            >
              A propos de nous
            </Typography>
          </CTA>
        </motion.div>
      </div>
    </section>
  );
}

function Blog() {
  const { ref, inView } = useInView({ threshold: 0.5 });
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
          url: `/Blog/${blog.id}`,
        }));

        setBlogs(mappedData);
        setFilteredBlogs(mappedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);
  return (
    <section ref={ref} className="container overflow-x-hidden">
      <div className="flex items-end justify-center md:justify-between flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffnes: 125,
            delay: 0.1,
            duration: 0.3,
          }}
          className="flex flex-col"
        >
          <Typography
            variant="small"
            className="text-grey-500 md:text-start text-center uppercase mb-2"
          >
            Blog
          </Typography>
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 md:text-start text-center"
          >
            Les derniers
            <br /> articles de notre blog
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "just",
            stiffness: 125,
            delay: 0.1,
            duration: 0.3,
          }}
        >
          <CTA
            url="/Blog"
            className="bg-primary hidden md:flex text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4"
          >
            <Typography
              variant="small"
              className="uppercase text-[12px] font-bold"
            >
              Decouvrir tout
            </Typography>
          </CTA>
        </motion.div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
        {blogs.slice(0, 3).map((card, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            key={card.id}
            className={`${
              index >= blogs.length - (blogs.length - 1)
                ? "hidden md:block"
                : ""
            }`}
          >
            <Link href={`/Blog/${card.id}`}>
              <CardBlog>
                <Image
                  src={IMAGE_END_POINT + "storage/" + card.img}
                  alt={card.title}
                  priority
                  quality={95}
                  width={500}
                  height={200}
                  className="object-cover w-full h-44"
                />
                <div className="p-5 flex flex-col justify-start">
                  <Typography
                    variant="small"
                    className="mb-3 text-xs font-semibold tracking-wide uppercase"
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="h3" className="font-bold leading-5">
                    {card.cathegorie}
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
        <CTA
          url="/Blog"
          className="bg-primary flex md:hidden text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4"
        >
          <Typography
            variant="small"
            className="uppercase text-[12px] font-bold"
          >
            Decouvrir tout
          </Typography>
        </CTA>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <section
      ref={ref}
      className="w-full p-8 md:p-16 bg-primary flex items-center justify-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{
          type: "just",
          stiffness: 125,
          delay: 0.1,
          duration: 0.3,
        }}
        className="container px-8 py-4 bg-grey-100 dark:bg-secondary-500 rounded-lg"
      >
        <Typography
          variant="h3"
          className="text-secondary-500 dark:text-grey-100 mb-8"
        >
          Prenez Contact
        </Typography>
        <Form />
      </motion.div>
    </section>
  );
}

function Form() {
  return (
    <form
      action={async (formaData) => {
        const { data, error } = await sendEmail(formaData);
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email send successfully!");
      }}
      className="grid grid-cols-2 gap-4 grid-flow-dense"
    >
      <div className="flex col-span-2 md:col-span-1 flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Nom (Personnel, Entreprise, Société)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={500}
          placeholder="ex: Marc, Krepri, Facebook"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="email"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Mail
        </label>
        <input
          type="email"
          name="senderMail"
          id="email"
          required
          maxLength={500}
          placeholder="exemple@gmail.com"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="phone"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Numéros téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="ex: +261 00 00 000"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="subject"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        >
          <option value="default"></option>
          <option value="Demande_de_stage">Demande de stage</option>
          <option value="Demande_d_information">
            Demande d&apos; information
          </option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 col-span-2">
        <label
          htmlFor="message"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Écrire un message..."
          className="placeholder:text-grey-500 min-h-[30vh] text-start px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>
      <div className="flex justify-end col-span-2">
        <SubmitButton />
      </div>
    </form>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="p-2 disabled:scale-100 disabled:bg-opacity-65 rounded-lg bg-primary text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4 uppercase flex items-center justify-center space-x-4"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-secondary-500"></div>
      ) : (
        <>
          <Typography variant="small">Evoyer</Typography>
          <SendIcon size={24} />
        </>
      )}
    </button>
  );
}
