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
        "black-100": "#424242",
        "black-200": "#626262",
        "primary": {
          DEFAULT: "#FF2178FF",
          100: "#FF214809",
          900: "#A9171CFF"
        },
        "secondary": {
          100: "#fcfcfc",
          500: "#f8f8f8",
          600: "#f3f3f3",
          700: "#efefef",
          800: "#e3e3e3",
          900: "#d0d0d0"
        }
      },
      screens: {
        'xs': '400px',
        'sm': '680px',
        'md': '750px',
        'lg': '1020px',
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

