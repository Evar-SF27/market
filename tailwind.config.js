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
          DEFAULT: "#FF2148FF",
          100: "#FF214822",
          // 900: "#DD0055"
          900: "#E94B3CFF"
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
        // => @media (min-width: 640px) { ... }
  
        'md': '750px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};

