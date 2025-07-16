import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Variants } from "motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "easeOut",
    },
  },
};
