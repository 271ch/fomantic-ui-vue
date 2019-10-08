/* eslint-disable */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
});
