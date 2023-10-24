/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary": {
          DEFAULT: "#FF2178FF",
          100: "#FF214822",
          // 900: "#DD0055"
          900: "#A9171CFF"
        },
        "secondary": {
          100: "#DFDFDF",
          500: "#B3B3B3",
          800: "#909090",
          900: "#888888"
        }
      },
      screens: {
        'xs': '400px',
        'sm': '680px',
        'md': '750px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};

