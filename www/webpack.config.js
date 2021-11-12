const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const path = require('path');

module.exports = {
  devServer: {
    host: "0.0.0.0",
    useLocalIp: true,
    port: 8080,
  },
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html']),
    new CopyWebpackPlugin(
      [{from: './', to: 'assets/'}],
      { context: './assets' }
    ),
    new CopyWebpackPlugin(
      [{from: './', to: 'assets/images/'}],
      { context: './assets/images' }
    ),
    new WriteFilePlugin()
  ],
};
