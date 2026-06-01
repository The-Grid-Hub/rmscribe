import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:             "#1E3F63",
        "navy-deep":      "#14304D",
        "navy-soft":      "#355A82",
        "navy-tint":      "#E6ECF3",
        terracotta:       "#C65D50",
        "terracotta-dark":"#A84A3F",
        "terracotta-soft":"#F3DAD5",
        wheat:            "#E9BD72",
        "wheat-dark":     "#C99A4D",
        "wheat-soft":     "#FAEFD9",
        bg:               "#FFFFFF",
        "bg-warm":        "#F7F6F2",
        "bg-warm-2":      "#EFEDE5",
        ink:              "#171717",
        "ink-2":          "#2E2E2E",
        "ink-3":          "#555555",
        "ink-4":          "#8A8A8A",
        "ink-5":          "#BDBDBD",
        hairline:         "#E5E2DA",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
        ui:      ["'Montserrat'", "'Inter'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up":    "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "slide-right":"slideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float:        "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
