/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000", // pure black
        secondary: "#ff0033", // main red
        tertiary: "#120000", // dark red-black

        "black-100": "#050000",
        "black-200": "#000000",

        "white-100": "#f3f3f3",

        "terminal-bg": "#000000",
        "terminal-text": "#ff0033", // RED terminal text
      },

      boxShadow: {
        card: "0px 35px 120px -15px rgba(255, 0, 51, 0.25)",
      },

      screens: {
        xs: "450px",
      },

      fontFamily: {
        minster: ["'UnifrakturCook'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
         geo: ["Geo", "sans-serif"],
      },

      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      animation: {
        glitch: "glitch 0.15s infinite",
        flicker: "flicker 1.5s infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },

 plugins: [
  function ({ addUtilities }) {
    const terminalBG = {
      ".bg-terminal": {
        position: "relative",
        backgroundColor: "#020617", // deep dark blue (better than pure black)
        overflow: "hidden",
      },

      ".bg-terminal::before": {
        content: '""',
        position: "absolute",
        inset: "0",
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        zIndex: 0,
      },

      ".bg-terminal::after": {
        content: '""',
        position: "absolute",
        inset: "0",
        background:
          "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(56,189,248,0.06) 3px)",
        mixBlendMode: "screen",
        animation: "scan 6s linear infinite",
        zIndex: 0,
      },
    };

    addUtilities(terminalBG, ["responsive"]);
  },
],
};