const path = require("path");
const package = require("./package.json");
const version = package.version;

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "."),
  output: {
    filename: `redux-action-reducer-generator-${version}-min.js`,
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