/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // এই ফাইলগুলোতে Tailwind CSS কাজ করবে
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
}
