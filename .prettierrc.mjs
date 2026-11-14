/** @type {import("prettier").Config} */
export default {
  arrowParens: "avoid",
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  tailwindStylesheet: "./src/styles/global.css",
};
