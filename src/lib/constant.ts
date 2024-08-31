import React from "react";
import { blog_1, blog_2, blog_3 } from "../asset";
import {
  Server,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
} from "lucide-react";
export const Links = [
  {
    name: "Acceille",
    path: "/",
  },
  {
    name: "A propos",
    path: "/Apropos",
  },
  {
    name: "Service",
    path: "/Service",
  },
  {
    name: "Produit",
    path: "/Produit",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

export const FooterLink = [
  {
    name: "Menu",
    links: [
      {
        name: "Acceille",
        path: "/",
      },
      {
        name: "A propos",
        path: "/AproposPage",
      },
      {
        name: "Service",
        path: "/ServicePage",
      },
      {
        name: "Produit",
        path: "/ProduitPage",
      },
      {
        name: "Blog",
        path: "/BlogPage",
      },
      {
        name: "Contact",
        path: "/ContactPage",
      },
    ],
  },
  {
    name: "Service",
    links: [
      {
        name: "Design",
        path: "/",
      },
      {
        name: "Developement",
        path: "/AproposPage",
      },
      {
        name: "Marketing",
        path: "/ServicePage",
      },
      {
        name: "Voir plus",
        path: "/ProduitPage",
      },
    ],
  },
];

export const CardServices = [
  {
    id: "1",
    title: "Développement Web",
    icon: React.createElement(Code),
    description:
      "Création de sites web sur mesure utilisant les dernières technologies et frameworks.",
  },
  {
    id: "2",
    title: "Hébergement Cloud",
    icon: React.createElement(Cloud),
    description:
      "Solutions d'hébergement cloud fiables et évolutives pour répondre à vos besoins.",
  },
  {
    id: "3",
    title: "Sécurité Informatique",
    icon: React.createElement(Shield),
    description:
      "Services de sécurité avancés pour protéger vos données et systèmes.",
  },
  {
    id: "4",
    title: "Développement Mobile",
    icon: React.createElement(Smartphone),
    description:
      "Développement d'applications mobiles intuitives et performantes pour iOS et Android.",
  },
  {
    id: "5",
    title: "Gestion de Bases de Données",
    icon: React.createElement(Database),
    description:
      "Solutions de gestion de bases de données robustes et efficaces.",
  },
  {
    id: "6",
    title: "Serveurs Dédiés",
    icon: React.createElement(Server),
    description:
      "Serveurs dédiés performants pour des besoins spécifiques et exigeants.",
  },
] as const;


export type IconName = (typeof CardServices)[number]["icon"];

export const getBlogById = (id:any) => {
  console.log(id);
  
  return id;
};

export const dataProduit = [
  {
    icon: React.createElement(Code),
    title: "Formule freelance a la cardte sans engagement",
  },
  {
    icon: React.createElement(Code),
    title: "Formule startup (avec 4h de permanence)",
  },
  {
    icon: React.createElement(Code),
    title: "Corporate (8h de disponibilite)",
  },
];
