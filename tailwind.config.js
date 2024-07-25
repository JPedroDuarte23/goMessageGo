import { colors } from "./src/styles/colors"
import { boxShadow } from './src/styles/boxShadow'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors,
      boxShadow
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}