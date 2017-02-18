const path = require('path');

module.exports = {
  entry: './source/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.cjsx$/,
        use: [
          { loader: 'cjsx-loader' },
          { loader: 'coffee-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
