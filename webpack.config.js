const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  }
};