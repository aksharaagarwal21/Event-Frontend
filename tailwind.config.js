/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Body text
        heading: ["Montserrat", "sans-serif"], // UI Headings

        // Custom Local Fonts
        horror: ["October Crow", "cursive"], // Primary Horror Font
        blood: ["Blood Crow", "cursive"], // Secondary Horror Font
      },
      colors: {
        // Backgrounds
        verse: {
          void: "#000003", // Main Background
          dark: "#080A0B", // Charcoal
          card: "#142B20", // Dark Forest Green
          overlay: "#675458", // Brownish Gray
        },
        // Text
        mist: {
          DEFAULT: "#D2D8D6", // Silver
          dim: "#949494", // Gray
        },
        // Accents
        blood: {
          DEFAULT: "#B12C3E", // Primary Red
        },
        toxic: {
          light: "#36986A", // Bright Green
          dark: "#0D4F30", // Deep Green
          sage: "#577062", // Muted Green
        },
        ocean: {
          DEFAULT: "#447095", // Muted Blue
          cyan: "#137394", // Bright Cyan
        },
        gold: {
          DEFAULT: "#E9AE34",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at center, rgba(54, 152, 106, 0.15) 0%, rgba(0, 0, 3, 0) 70%)",
        "blood-glow":
          "radial-gradient(circle at center, rgba(177, 44, 62, 0.2) 0%, rgba(0, 0, 3, 0) 70%)",
      },
      boxShadow: {
        "neon-green": "0 0 20px rgba(54, 152, 106, 0.3)",
        "neon-red": "0 0 20px rgba(177, 44, 62, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
