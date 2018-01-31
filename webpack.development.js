'use strict';

const merge = require('webpack-merge');

const common = require('./webpack.common');

const main = merge.smart(common.main, {
  devtool: 'source-map'
});

module.exports = [
  main
];
