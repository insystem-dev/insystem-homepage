/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        "basic-100": "var(--basic-100)",
        "basic-800": "var(--basic-800)",
        "x02-black": "var(--x02-black)",
        "x02-blue": "var(--x02-blue)",
        "x02-gray-black": "var(--x02-gray-black)",
        "x02-gray-dark": "var(--x02-gray-dark)",
        "x02-gray-light": "var(--x02-gray-light)",
        "x02-lavender": "var(--x02-lavender)",
        "x02-light-blue": "var(--x02-light-blue)",
        "x02-midnight-blue": "var(--x02-midnight-blue)",
        primary: {
          50: "#f0f9ff",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        dark: {
          950: "#0a0e27",
          900: "#0f172a",
          800: "#1e293b",
        },
        boxShadow: {
          "3d": "var(--3d)",
          "button-md": "var(--button-md)",
          "button-sm": "var(--button-sm)",
        },
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to bottom right, #0a0e27, #1e3a8a, #0f172a)",
      },
    },
  },
  plugins: [],
};
