/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ MUST be exact
    "./src/index.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
