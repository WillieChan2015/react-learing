const path = require("path");

module.exports = {
  // 入口
  entry: path.join(__dirname, "src/index.jsx"),

  // webpack.dev.config.js
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      }
    ]
  }
};
