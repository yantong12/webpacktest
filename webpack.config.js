const webpack = require("webpack");
const path = require("path");
const webpackCleanPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

// 多页面优化打包时间，稳定hash
// 1.约束入口  使用BundleAnalyzerPlugin 插件分析，发现部分组件被打包为了入口，梳理一遍后，重新打包
// 2.使用UglifyjsWbepackPlugin开启多线程打包 打包速度提了1/3
// 3.使用happypack多线程加速loader
// 4.使用dll拆分代码 将修改频率较低或者基本不修改且引用次数多的内容单独打包，因为设计dall后。config文件的数量剧增所以需要重新整理目录

module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js",
    commom: ["jquery","lodash"]
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
              })
        }

      ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js"//注意：热更新(HMR)不能和[chunkhash]同时使用。 1： 如果是开发环境，将配置文件中的chunkhash 替换为hash 2：如果是生产环境，不要使用参数 --hot
    //chunkhash 是根据模块内容来添加hash的，所以只要文件不变，chunkhash就不会变
  },
  plugins: [
    new webpackCleanPlugin(["dist"]),//删除dist文件
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin("[name].css"), // 提取公共css contenthash代表文件内容的hash值，style的hash值
    new UglifyJSPlugin({
        parallel: true
    })
    ],
    optimization: {
        runtimeChunk: {//提取模块映射关系
        name: "manifest"
        },
        splitChunks: {//提取公共代码
        cacheGroups: {
            commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
            }
        }
        }
    }
};
