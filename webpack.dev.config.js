const webpack = require("webpack");
const path = require("path");

module.exports = {
  // 入口
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, "src/main.jsx")
  ],

  // webpack.dev.config.js
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      }
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

  // 开启热更新
  // 目前在 package.json 中配置了 --hot (CLI方式)，具有同样效果
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
};
