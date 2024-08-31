import { cn } from "@/lib/utils";

interface cardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardBlog({ children, className }: cardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
