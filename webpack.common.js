'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const project = require('./project');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {

  output: {
    filename: '[name].js',
    path: path.join(__dirname, project.outputDir),
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    modules: [
      'node_modules'
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],

  node: {
    __dirname: false,
    __filename: false,
  },
};

const main = merge.smart(common, {
  target: 'electron-main',

  entry: {
    main: path.resolve(__dirname, 'app/src/main/main')
  },
});

const renderer = merge.smart(common, {
  target: 'electron-renderer',

  entry: {
    renderer: path.resolve(__dirname, 'app/views/index')
  },

  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'app/static/index.html'), chunks: ['renderer']}),
  ]
});

module.exports = {
  main,
  renderer
};
