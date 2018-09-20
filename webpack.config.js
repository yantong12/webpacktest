const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main:"./src/index.js",
    vandor: ['lodash']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title:'caching'}),
    new webpack.HashedModuleIdsPlugin()
    // new webpack.optimize.CommonsChunkPlugin({name:'manifest'})
  ],
  optimization: {
    runtimeChunk:{
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
            name: "vendor",
        }
    }
    }
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
