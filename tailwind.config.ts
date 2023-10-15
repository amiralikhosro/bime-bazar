import type { Config } from "tailwindcss";

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
      boxShadow: {
        custom: "0px 3px 15px 3px rgba(34, 34, 34, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
