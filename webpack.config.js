// const path = require("path");

// module.exports = {
//   entry: "./app/Main.js",
//   output: {
//     publicPath: "/",
//     path: path.resolve(__dirname, "app"),
//     filename: "bundled.js",
//   },
//   mode: "development",
//   devtool: "source-map",
//   devServer: {
//     port: 3000,
//     static: {
//       directory: path.join(__dirname, "app"),
//     },
//     hot: true,
//     liveReload: false,
//     historyApiFallback: { index: "index.html" },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-react",
//               ["@babel/preset-env", { targets: { node: "12" } }],
//             ],
//           },
//         },
//       },
//     ],
//   },
// };

const path = require("path");

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Updated to include .jsx
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: { node: "12" } }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Added resolve section
  },
};
