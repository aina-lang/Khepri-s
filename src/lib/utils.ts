import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateString = (value: unknown, maxLength: number) => {
  return typeof value === "string" && value.length <= maxLength;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something wait wrong";
  }

  return message;
};

const stylesIcon = {
  black: "rgb(15, 15, 15)",
  yellow: "rgb(245, 191, 4)",
};

export const API_END_POINT = "http://localhost:8000/api/";

export const IMAGE_END_POINT = "http://localhost:8000/";
export { stylesIcon };
export async function getBlogById(id: string) {
  try {
    const response = await fetch(`http://localhost:8000/api/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
