import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme: {
          gray: '#fff2e8',
          gray_text: '#6c757d',
        },
        brand: {
          green: '#d7e4c0',
          orange: '#ff4500',
          salad: '#d7e4c0',
        },
      },
      fill: {
        "gray-50": "var(--color-theme-50);",
      },
      fontFamily: {
        sans_source: ['var(--font-sans)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
