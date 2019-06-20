const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    app: [
      path.join(__dirname, "src/App.jsx")
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  },
  // entry: [
  //   'react-hot-loader/patch',
  //   path.join(__dirname, "src/App.jsx")
  // ],

  // webpack.dev.config.js
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: '[name].[chunkhash].js',
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
      {
        test: /\.js|jsx$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,    // 小于等于8K的图片会被转成base64编码
          }
        }]
      },
    ]
  },

  // 增强调试
  devtool: 'cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
    }),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),

    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),

    new UglifyJSPlugin(),
  ],
};
