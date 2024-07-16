/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
    fontFamily: {
        bungee: ['Bungee', 'cursive'],
        pressStart: ['"Press Start 2P"', 'cursive'],
        customFont: [ 'sans-serif'],
      },
      colors: {
        primary: '#304761',
        secondary: '#d2d1d6',
        customDark: '#304761',
        customLight: '#d2d1d6',
      },
    },
  },
  variants: {
    extend: {},
  },
 plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}