/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Poppins: ["Poppins", "sans - serif"],
      },
      colors: {
        auth_font_color: "#11175D",
        auth_blue_color: "#086FA4",
      },
    },
  },
  plugins: [],
};
