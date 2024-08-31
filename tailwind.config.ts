import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "832px",
          md: "1024px",
          lg: "1200px",
          xl: "1280px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F5BF04",
        secondary: {
          "500": "#0F0F0F",
          "100": "#333333",
        },
        grey: {
          "500": "#696969",
          "300": "#C1C1C1",
          "100": "#DDDDDD",
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "832px",
        md: "1024px",
        lg: "1200px",
        xl: "1280px",
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;
