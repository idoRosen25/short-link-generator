import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function camelToPascalWithSpaces(str: string): string {
  // Capitalize the first letter and insert space before every subsequent capital letter
  return str.replace(/^[a-z]/, (match) => match.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2')
}
