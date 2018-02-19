'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const main = merge.smart(common.main, {
  devtool: 'source-map'
});

const renderer = merge({}, common.renderer, {
  devtool: 'source-map',

  entry: {
    renderer: [
      common.renderer.entry.renderer,
    ],
  },

  output: {
    publicPath: 'http://localhost:3000/build/',
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = [
  main,
  renderer
];
