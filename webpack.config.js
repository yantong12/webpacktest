const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: {
    app:"./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'progressive web application'
    }),
    new CleanWebpackPlugin(['dist']),
    new WorkboxPlugin.GenerateSW({
       // 这些选项帮助 ServiceWorkers 快速启用
     // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
