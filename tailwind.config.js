/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandPurple: "#6C4AB6",
        brandGold: "#FFD700",
        brandRed: "#FF3B30",
        brandBlack: "#0D0D0D",
      },
    },
  },
  plugins: [],
}
