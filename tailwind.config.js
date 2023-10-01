/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#159ca8",
          "secondary": "#fcc2f5",
          "accent": "#f4e49c",
          "neutral": "#241c2c",
          "base-100": "#4e3c4e",
          "info": "#6498f2",
          "success": "#178773",
          "warning": "#dd870e",
          "error": "#f1281e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
