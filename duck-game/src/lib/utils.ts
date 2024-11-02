import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeDiff = (time: Date) => {
  const now = new Date()
  const diff = now.getTime() - time.getTime()
  if (diff < 60000) {
      return "刚刚"
  } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)}分钟前`
  } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)}小时前`
  } else {
      return `${Math.floor(diff / 86400000)}天前`
  }
}