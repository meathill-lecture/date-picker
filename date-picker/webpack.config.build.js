/**
 * Created by Meathill on 2017/5/26.
 */

const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/* global __dirname */
module.exports = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  entry: {
    'tqb-date-picker': './app/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      },
      {
        test: /\.styl$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|eot|woff|ttf|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  externals: {
    'jquery': 'jQuery'
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
  ]
};