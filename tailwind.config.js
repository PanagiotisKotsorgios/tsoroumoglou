/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#182E25',
        sage: '#A4B49B',
        gold: '#D6A65D',
        ivory: '#F5F3EC',
        charcoal: '#222727',
      },
      fontFamily: {
        display: ['"Noto Serif Display"', 'Georgia', 'serif'],
        sans: ['"Noto Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
