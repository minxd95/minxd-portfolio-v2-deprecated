const path = require("path")

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
  },
  webpack: {
    alias: {
      "@": path.resolve("src/"),
    },
  },
}
