/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "satoshi": ["Satoshi"],
        "satoshi-bold": ["SatoshiBold"],
      },
      colors: {
        "black": "#1a1a1a",
        "black-100" : "#242424",
        "app-green": "#42d392",
        "app-blue": "#5f8aee",
        "app-blue-light": "#abc2f6",
        "app-orange": "#ff6600",
        "app-yellow": "#c8c832",
        "app-gold" : "#fdd663"
      }
    },
  },
  plugins: [],
}

