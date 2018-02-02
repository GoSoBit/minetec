'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const project = require('./project');

const common = require('./webpack.common');

const main = merge.smart(common.main, {
  devtool: 'source-map'
});

const renderer = merge({}, common.renderer, {
  devtool: 'source-map',

  output: {
    publicPath: `http://localhost:${project.port}/out/`,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = [
  main,
  renderer
];
