/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'galaxy-background': "url('/images/background.jpg')",
    }},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

