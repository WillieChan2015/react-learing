const webpack = require("webpack");
const merge = require('webpack-merge');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require("./webpack.common.config.js");

const devConfig  = {
  // 入口
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, "src/App.jsx")
    ],
    // vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  },
  // entry: [
  //   'react-hot-loader/patch',
  //   path.join(__dirname, "src/App.jsx")
  // ],

  // webpack.dev.config.js
  output: {
    // path: path.join(__dirname, "./dist"),
    /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
    filename: "[name].[hash].js",
    // chunkFilename: '[name].[chunkhash].js',
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      // actions: path.join(__dirname, 'src/redux/actions'),
      // reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },

  module: {
    rules: [
      // {
      //   test: /\.js|jsx$/,
      //   use: ['babel-loader?cacheDirectory=true'],
      //   include: path.join(__dirname, 'src'),
      // },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8192,    // 小于等于8K的图片会被转成base64编码
      //     }
      //   }]
      // },
    ]
  },

  devServer: {
    // hot: true,   // 开启热更新
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
  },

  // 增强调试
  devtool: 'inline-source-map',

  // plugins: [
  //   // 开启热更新
  //   // 目前在 package.json 中配置了 --hot (CLI方式)，具有同样效果
  //   // new webpack.HotModuleReplacementPlugin(),

  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: path.join(__dirname, 'src/index.html'),
  //   }),

  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor'
  //   }),
  // ],
};


module.exports = merge({
  customizeArray(a, b, key) {
    // entry.app不合并，全替换
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);