var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  entry: path.join(__dirname, '/src/index.js'),
  externals: [require('./ignored-modules')],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel?stage=1&blacklist=validation.react']
      }
    ]
  },
  plugins: [new webpack.NoErrorsPlugin()],
  resolve: { extensions: ['', '.js', '.jsx'] },
  output: {
    path: path.join(__dirname, '/'),
    filename: 'index.ios.js',
    libraryTarget: 'commonjs'
  }
};