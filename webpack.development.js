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

  entry: {
    renderer: [
     // 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      common.renderer.entry.renderer,
    ],
  },

  output: {
    publicPath: 'http://localhost:3000/build/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = [
  main,
  renderer
];
