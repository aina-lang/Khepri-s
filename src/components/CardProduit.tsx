import { cn } from "@/lib/utils";

interface CardProduitProps {
  children:React.ReactNode;
  className?:string
}

export default function CardProduit({children, className}:CardProduitProps) {
  return (
    <div className={cn("bg-grey-100 dark:bg-secondary-500 p-8 rounded-lg flex flex-col items-center md:items-start", className)}>
      {children}
    </div>
  )
}