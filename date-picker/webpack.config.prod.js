/**
 * Created by meathill on 2017/6/16.
 */

const config = require('./webpack.config');
const webpack = require('webpack');

config.devtool = false;
config.watch = false;
config.mode = 'development';
config.plugins = [
  new webpack.DefinePlugin({
    DEBUG: false
  })
];

module.exports = config;