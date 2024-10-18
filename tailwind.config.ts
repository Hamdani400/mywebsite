import type { Config } from "tailwindcss";

const createPaddingObject = (max: number) => {
  const paddingObject: Record<string, string> = {};
  for (let i = 1; i <= max; i++) {
    paddingObject[`${i}vw`] = `${i}vw`;
  }
  return paddingObject;
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkbg: '#f5f5f0',
      },
      padding: createPaddingObject(100),
      fontSize: {
        '2xs': '.65rem',
        '3xs': '.6rem'
      }
    },
  },
  plugins: [],
};
export default config;
