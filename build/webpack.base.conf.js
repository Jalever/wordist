const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');


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
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new VueLoaderPlugin(),
    new AutoDllPlugin({
        inject: true, // will inject the DLL bundle to index.html
        debug: true,
        filename: '[name]_[hash].js',
        path: './dll',
        entry: {
          vendor: ['vue']
        }
      }),
      new webpack.optimize.SplitChunksPlugin()
  ],
  resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, '../src'),
      },
      extensions: ['*', '.js', '.json', '.vue']
  }
};
