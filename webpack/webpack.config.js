var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/main.js',

  output: {
    path: '.',
    filename: 'bundle.js'
  },

  extensions: ['', '.js', '.coffee'],

  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
}
