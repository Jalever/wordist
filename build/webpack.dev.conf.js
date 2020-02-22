const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    host: "localhost",
    port: 9090,
    historyApiFallback: true,
    open: true,
    contentBase: path.resolve(__dirname, "../dist"),
    proxy: {
      "/api": {
        "changeOrigin": true,
        "secure": false,
        "target": "http://47.106.132.253:7001"
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
