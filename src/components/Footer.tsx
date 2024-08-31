import { FooterLink } from "@/lib/constant";
import { logo_2 } from "@/asset";
import Image from "next/image";
import Typography from "./Typographie";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
// import { stylesIcon } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="px-8 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 relative pt-5 border-t border-secondary-500 dark:border-grey-100">
        <div className="col-span-2 md:col-span-1">
          <Image src={logo_2} alt="Logo footer" priority className="dark:invert" />
        </div>

        {FooterLink.map((item, index) => (
          <div key={index} className="col-span-2 md:col-span-1">
            <Typography variant="span" className="text-secondary-500 dark:text-grey-100">
              {item.name}
            </Typography>
            <div className="flex flex-col items-start">
              {item.links.map((link, index) => (
                <Link href={link.path} key={index} className="text-secondary-500 dark:text-grey-100">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-start gap-4">
          <Link
            href="#"
            className="bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary flex items-center justify-center rounded-full p-4 h-16 w-16"
          >
            <Facebook />
            {/* <Facebook fill={`${stylesIcon.yellow}`} strokeWidth={0} /> */}
          </Link>{" "}
          <Link
            href="#"
            className="bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary flex items-center justify-center rounded-full p-4 h-16 w-16"
          >
            <Linkedin />
            {/* <Linkedin fill={`${stylesIcon.yellow}`} strokeWidth={0} /> */}
          </Link>{" "}
          <Link
            href="#"
            className="bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary flex items-center justify-center rounded-full p-4 h-16 w-16"
          >
            <Twitter />
            {/* <Twitter fill={`${stylesIcon.yellow}`} strokeWidth={0} /> */}
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-secondary-500 dark:border-grey-100 lg:flex-row">
        <Typography variant="small" className="text-sm text-grey-500">
          © Copyright 2024. All rights reserved.
        </Typography>
        <div className="text-grey-500 flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
