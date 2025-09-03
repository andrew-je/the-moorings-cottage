import { clsx } from "clsx"

export function cn(...inputs) {
  return clsx(inputs)
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
