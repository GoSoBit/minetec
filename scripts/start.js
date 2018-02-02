#!/usr/bin/env node

'use strict';

const cp = require('child_process');

if (process.env.NODE_ENV === 'production') {
  return
}

const express = require('express');
const webpack = require('webpack');
const [main, renderer] = require('../webpack.development');

const compiler = webpack(renderer);
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false, publicPath: renderer.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, () => {
  launch();
  console.log('Listening on http://localhost:3000');
  console.log(app._router.stack);
});

function launch() {
  cp.spawn('electron', ['./out/main.js'])
}
