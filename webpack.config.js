const path = require('path');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './assets/js/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [ {
      test: /\.scss$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader', 'postcss-loader'],
      })
    } ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css")
  ]
}
