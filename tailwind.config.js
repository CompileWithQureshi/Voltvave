/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C98EF',
        secondary: '#4c71ef',
        success: '#48bb78',
        black: '#323232',
        gray: '#C1C5CB',
      },
      fontSize: {
        heading: '42px',
        title: '24px',
        logo:'18px',
        paragrag: '14px',
      },
      
    },
  },
  plugins: [],
};
