/**
 * Created by Meathill on 2017/5/26.
 */

const path = require('path');
const webpack = require('webpack');

/* global __dirname */
module.exports = {
  entry: {
    'tqb-date-picker': './app/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'tqbDatePicker',
    libraryTarget: 'umd',
  },
  target: 'node',
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