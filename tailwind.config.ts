// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        background: '#0B0B0F',
        foreground: '#E6E6E6',
        'muted-foreground': '#9CA3AF',
        accent: '#8A63F7',
        'accent-hover': '#6C4BD1',
        yellowish: '#F4B400',
      },
    },
  },
  plugins: [],
}
export default config
