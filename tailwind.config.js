/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#815839",
        beige: "#F5EBE0",
        darkGreen: "#193B1B",
        lightGreen: "#4B692F",
      },
    },
  },
  plugins: [],
}

