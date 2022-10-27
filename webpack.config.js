const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new CopyPlugin({
        patterns: [
            { from: "src/assets", to: "assets" },
            { from: "src/css", to: "css" },
            { from: "src/index.html", to: ""}
        ]
    })
  ]
};