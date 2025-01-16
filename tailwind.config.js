/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        iceberg: ["Iceberg", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
      },
      fontSize: {
        "10xl": "10rem",
      },
      keyframes: {
        pingStaggered: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(2)", opacity: "0.3" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-20px)", opacity: 0 },
        },
        replaceText: {
          "0%": {
            transform: "rotateX(90deg)",
            opacity: "0",
          },
          "50%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        pingDot1: "pingStaggered 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        pingDot2: "pingStaggered 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s",
        pingDot3: "pingStaggered 3s cubic-bezier(0, 0, 0.2, 1) infinite 1s",
        fadeOut: "fadeOut 1s ease-out forwards",
        fadeIn: "fadeIn 1.8s ease-in forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        replaceText: "replaceText 2.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
