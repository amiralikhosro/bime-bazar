import type { Config } from "tailwindcss";

const COLORS = {
  primary: { DEFAULT: "#285596", dark: "#1E416E", darkest: "#19325A" },
  secondary: { light: "#5AD7F0", DEFAULT: "#23B9D7", dark: "#0096B4" },
  success: { DEFAULT: "#20DCAF", dark: "#449d44", light: "#34A862" },
  error: { DEFAULT: "#E61F10", dark: "#c9302c", light: "#f2dede " },
  warning: { DEFAULT: "#FFC453 ", dark: "#ec971f", light: "#b3560054 " },
  info: { DEFAULT: "#5bc0de", dark: "#66afe9", light: "#d9edf7" },
  white: { DEFAULT: "#fff", dark: "#fafafa" },
  gray: {
    DEFAULT: "#B4B4B4",
    dark: "#9B9B9B",
    light: "#E0E0E0",
    lightest: "#757575",
  },
  black: "#000000",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Vazir: ["Vazir"],
      },
      colors: {
        ...COLORS,
      },
      boxShadow: {
        custom: "0px 3px 15px 3px rgba(34, 34, 34, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
