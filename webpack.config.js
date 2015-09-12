var path = require('path');

module.exports = {
  debug: true,
  devtool: 'source-map',
  watch: true,
  plugins: [],
  entry: {
    'index.ios': ['./src/index.js']
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: 'index.ios.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel?blacklist=validation.react']
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'react': 'react-native'
    }
  }
};
