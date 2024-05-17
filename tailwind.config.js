import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
      },
      animation: {
        carousel: 'marquee 6s linear infinite',
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "custom-dark": {
          extend: "dark",
          colors: {
            feature:"#190c2d",
          },
        },
      },
    }),
  ],
}
