/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
         colors :{
          'c-dark': '#032f40',
          'c-grey': "#657c85",
          "c-light-grey": "#f5f5f5",
          "c-blue": "#1d6c83",
          "c-green": "#85c8b6",
          "c-light-green": "#d6efe5",
          "c-dark-green": "#38a186",
         },
         animation: {
          'spin-slow': 'spin 14s linear infinite',
        },
    },
  },
  plugins: [],
}
