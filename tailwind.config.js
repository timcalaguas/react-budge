/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          teal: "#294b4f",
          dark: "#1c272a",
          light: "#d4e8e8",
          slate: "#363f41",
        },
      },
      fontFamily: {
        work: ['"Work Sans"', "sans-serif"], // Optional custom alias
      },
    },
  },
  plugins: [],
};
