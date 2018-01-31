'use strict';

const merge = require('webpack-merge');
const path = require('path');
const project = require('./project');

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
        include: path.resolve(__dirname, 'app/src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true,
            },
          },
        ],
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    modules: [
      'node_modules'
    ],
  },

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

module.exports = {
  main
};
