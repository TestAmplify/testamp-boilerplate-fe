import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "450px",
      md: "768px",
      lg: "1200px",
    },

    extend: {
      fontSize: {
        "2xs": ["0.625rem", "1rem"],
        "3xs": ["0.5rem", "1rem"],
        "4xs": ["0.375rem", "0.7rem"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#2E2E2E",
          200: "#5C5C5C",
          300: "#767676",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        "foundation-grey": {
          light: "#ebebeb",
          "light-hover": "#E1E1E1",
          newLight: "#eeeeee",
          normal: "#383938",
          "normal-hover": "#323332",
          dark: "#2A2B2A",
        },

        "foundation-white": {
          light: "#FDFDFD",
          "light-hover": "#FBFBFB",
          normal: "#E6E6E6",
          "normal-hover": "#CFCFCF",
          dark: "#ADADAD",
          "dark-active": "#676767 ",
          darker: "#515151",
        },

        "foundation-primary": {
          normal: "#142E84",
        },
        dashboard: {
          green: "#34C759",
        },
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
    boxShadow: {
      // Custom shadow for the button
      button: "0 10px 10px rgba(0, 0, 0, 0.10)", // Adjust these values
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
