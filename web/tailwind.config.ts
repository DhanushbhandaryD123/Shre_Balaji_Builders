import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          alt: '#FAF9F6',
          dark: '#0d1829',
        },
        navy: {
          DEFAULT: '#12233F',
          50: '#f2f4f8',
          100: '#e1e6f0',
          200: '#c5d0e2',
          300: '#9cb1cf',
          400: '#6d8db9',
          500: '#4c6ea3',
          600: '#395484',
          700: '#2e436a',
          800: '#273857',
          900: '#12233F',
          950: '#0b1628',
        },
        maroon: {
          DEFAULT: '#6E1E2A',
          50: '#faf2f3',
          100: '#f5e4e6',
          200: '#ebcbd0',
          300: '#dca4ad',
          400: '#c67382',
          500: '#b14d5e',
          600: '#9b394a',
          700: '#6E1E2A',
          800: '#69232e',
          900: '#59212a',
          950: '#320e14',
        },
        gold: {
          DEFAULT: '#C9A35C',
          50: '#fbf9f2',
          100: '#f5f0de',
          200: '#ecdfbf',
          300: '#dfca97',
          400: '#d1b16e',
          500: '#C9A35C',
          600: '#b58b4d',
          700: '#946f3e',
          800: '#775836',
          900: '#62482f',
          950: '#382718',
        },
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        numeral: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },

      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 10px 25px -5px rgba(110, 30, 42, 0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 20px 30px -5px rgba(110, 30, 42, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
