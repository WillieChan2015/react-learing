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
    filename: "bundle.js",
    chunkFilename: '[name].js',
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

  // 开启热更新
  // 目前在 package.json 中配置了 --hot (CLI方式)，具有同样效果
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
};
