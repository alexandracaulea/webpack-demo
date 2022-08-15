const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/assets/js/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  mode:
    process.env.NODE_ENV === "production"
      ? "production"
      : "development",
};
