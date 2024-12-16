import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3871c1",
          secondary: "#b7acac",
          accent: "#55D6BE",
          neutral: "#3871c1",
          "base-100": "#111928",
          info: "#00a2eb",
          success: "#40bd00",
          warning: "#ffc300",
          error: "#ff888e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
