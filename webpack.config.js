const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
const globals = require('./globals.js')
const path = require('path')

module.exports = {
  entry: path.join('/pages/index.ejs'),
  output: {
    path: path.join('/views'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'views/pages/index.ejs', templateParameters: globals })]
}
