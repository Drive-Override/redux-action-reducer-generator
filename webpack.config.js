const path = require("path");
const package = require("./package.json");
const version = package.version;

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: `index.js`,
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}