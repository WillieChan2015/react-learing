const merge = require('webpack-merge');

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const prodConfig = {
  // 入口
  // entry: {
  //   app: [
  //     path.join(__dirname, "src/App.jsx")
  //   ],
  //   // 用于提取公共代码
  //   vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  // },
  // entry: [
  //   'react-hot-loader/patch',
  //   path.join(__dirname, "src/App.jsx")
  // ],

  // webpack.dev.config.js
  // output: {
  //   path: path.join(__dirname, "./dist"),
  //   filename: "[name].[chunkhash].js",
  //   chunkFilename: '[name].[chunkhash].js',
  //   publicPath : '/',
  // },

  // resolve: {
  //   alias: {
  //     src: path.join(__dirname, 'src'),
  //     pages: path.join(__dirname, 'src/pages'),
  //     component: path.join(__dirname, 'src/component'),
  //     // actions: path.join(__dirname, 'src/redux/actions'),
  //     // reducers: path.join(__dirname, 'src/redux/reducers'),
  //   }
  // },

  module: {
    rules: [
      // {
      //   test: /\.js|jsx$/,
      //   use: ['babel-loader?cacheDirectory=true'],
      //   include: path.join(__dirname, 'src'),
      // },
      {
        test: /\.css|scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader', "postcss-loader"],
        }),
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

  // 增强调试
  devtool: 'cheap-module-source-map',

  plugins: [
    // 用于打包前清理 dist 下的文件
    new CleanWebpackPlugin(['dist/']),

    // 用于自动把生产的 js 文件插入到 html 里
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, 'src/index.html'),
    // }),

    // 提取css
    new ExtractTextPlugin({
        filename: '[name].[contenthash:5].css',
        allChunks: true,
    }),

    // 优化缓存
    // new webpack.HashedModuleIdsPlugin(),

    // 用于提取公共代码，例如 react库
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),

    // 优化缓存
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'runtime'
    // }),

    // 指定环境
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
    }),

    // 压缩代码
    new UglifyJSPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);