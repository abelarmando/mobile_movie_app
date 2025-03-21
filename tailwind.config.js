/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        accent: "#AB8BFF",
        bgcolor: "#0F0D23",
        detailcl: "#D6C7FF",
        textclr: "#A8B5DB",
      },
    },
  },
  plugins: [],
};
