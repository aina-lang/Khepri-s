import React from "react";
import { cn } from "../lib/utils";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "span" | "small";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={cn("scroll-m-20 font-extrabold tracking-tight text-3xl md:text-4xl sm:text-5xl lg:text-5xl", className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
          {children}
        </h4>
      );
    case "p":
      return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
    case "blockquote":
      return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
          {children}
        </blockquote>
      );
    case "span":
      return <span className={cn("text-xl text-muted-foreground", className)}>{children}</span>;
    case "small":
      return (
        <small className={cn("text-sm font-medium leading-none", className)}>
          {children}
        </small>
      );
    default:
      return <>{children}</>;
  }
};

export default Typography;
