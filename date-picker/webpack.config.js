/**
 * Created by Meathill on 2017/5/26.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'tqb-date-picker': './app/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true
    })
  ]
};