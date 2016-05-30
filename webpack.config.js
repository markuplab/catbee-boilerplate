const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PATTERN = '[folder]__[local]-[hash:base64:5]';

module.exports = {
  entry: './browser.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', `css-loader?modules&importLoaders=1&localIdentName=${PATTERN}!postcss-loader`)
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  postcss: [
    autoprefixer()
  ],
  plugins: [
    new ExtractTextPlugin('build.css', { allChunks: true })
  ],
  devtool: '#source-map'
};
