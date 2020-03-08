const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin")
  .default;

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new WebpackDeepScopeAnalysisPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new VueLoaderPlugin(),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: "[name]_[hash].js",
      path: "./dll",
      entry: {
        vendor: ["vue"]
      }
    }),
    new webpack.optimize.SplitChunksPlugin()
  ],
  /**
   * key: 作为import xx from "yyy";
   * value: 作为全局对象,挂载在window上
   */
  externals: {
    vue: "Vue",
    "element-ui": "ELEMENT"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    },
    extensions: ["*", ".js", ".json", ".vue"]
  },
  optimization: {
    //提取共同代码
    splitChunks: {
      chunks: "all"
    },
    minimize: true
  }
};
