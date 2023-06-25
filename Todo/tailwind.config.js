/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-cool': '#FFE79D',
        'orange-cool': '#F99638',
      },
    },
  },
  plugins: [],
}