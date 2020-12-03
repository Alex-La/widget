const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = "production" !== process.env.NODE_ENV;

module.exports = {
  entry: __dirname + "/src/index.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    library: "Widget",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: isDevMode
    ? [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "bundle.min.css" }),
      ]
    : [new MiniCssExtractPlugin({ filename: "bundle.min.css" })],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "src/styles"),
    },
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: ["*", ".js", ".jsx"],
  },
};
