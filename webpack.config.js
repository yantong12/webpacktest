const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundel.js",
    path: path.resolve(__dirname, "dist")
  },
};
