/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        down: {
          '0%': {
            transform: 'translateY(250%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slowTop: 'slide 0.6s ease-in-out',
        slowDown: 'down 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
