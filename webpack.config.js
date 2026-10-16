const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  entry: "./src/main.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.EnvironmentPlugin([
      "APP_API_BASE_URL",
      "APP_API_KEY",
      "APP_AUTH_DOMAIN",
      "APP_PROJECT_ID",
      "APP_STORAGE_BUCKET",
      "APP_MESSAGING_SENDER_ID",
      "APP_ID",
    ]),
  ],

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
