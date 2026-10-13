const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

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
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        process.env.APP_API_BASE_URL,
        process.env.APP_API_KEY,
        process.env.APP_AUTH_DOMAIN,
        process.env.APP_PROJECT_ID,
        process.env.APP_STORAGE_BUCKET,
        process.env.APP_MESSAGING_SENDER_ID,
        process.env.APP_ID,
      ),
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  dotenv: {
    prefix: "APP_",
  },
};
