import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));
export default cn;
export { cn, type ClassValue };
