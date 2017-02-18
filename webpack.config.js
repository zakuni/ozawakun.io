const path = require('path');

module.exports = {
  entry: './source/javascripts/font-family.js.cjsx',
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/font-family.js'
  },
  module: {
    rules: [
      {
        test: /\.cjsx$/,
        use: [
          { loader: 'cjsx-loader' },
          { loader: 'coffee-loader' }
        ]
      }
    ]
  }
};
