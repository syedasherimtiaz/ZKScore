/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#00FF94',
          dark: '#0A0F0D',
          darker: '#050807',
        },
        gray: {
          800: '#1A1F1C',
          700: '#2A2F2C',
          600: '#3A3F3C',
        }
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 40px rgba(0, 255, 148, 0.3)',
        'glow-green-lg': '0 0 60px rgba(0, 255, 148, 0.4)',
      },
      backgroundImage: {
        'radial-dark': 'radial-gradient(circle at center, #0A0F0D 0%, #050807 100%)',
      }
    },
  },
  plugins: [],
}