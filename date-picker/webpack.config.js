/**
 * Created by Meathill on 2017/5/26.
 */

const path = require('path');
const webpack = require('webpack');

/* global __dirname */
module.exports = {
  entry: {
    'tqb-date-picker': './app/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      }
    ]
  },
  externals: {
    'jquery': 'jQuery'
  },
  mode: 'development',
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