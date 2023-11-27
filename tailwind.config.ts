import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/constants/index.ts",
  ],
  theme: {
    extend: {
      borderRadius: {
        sm: "4px",
      },
      screens: {
        "3xl": "1620px",
      },
      colors: {
        "color-primary": "#FFFFFF",
        "color-primary-1": "#363738",
        "color-text-1": "#FAFAFA",
        "color-text-2": "#7D8184",
        "color-text-2-hover": "#000000",
        "color-text-3": "#000000",
        "color-text-4": "#00FF66",
        "color-secondary": "#F5F5F5",
        "color-secondary-hover": "#E3E3E3",
        "color-secondary-1": "#FEFAF1",
        "color-secondary-2": "#DB4444",
        "color-button": "#00FF66",
        "color-button-hover": "#A0BCE0",
        "color-button-1": "#DB4444",
        "color-button-1-hover": "#E07575",
        "color-bg": "#FFFFFF",
        "color-bg-1": "#000000",
        "color-rating-star": "#FFAD33",
        "color-divider": "#B3B3B3",
        "color-footer-copyright": "#3D3D3D",
      },
    },
  },
  plugins: [],
};
export default config;
