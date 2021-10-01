const HtmlWebpackPlugin = require('html-webpack-plugin');
const globals = require('./globals.js')

module.exports = {
  entry: __dirname + '/pages/index.ejs',
  output: {
    path: __dirname + '/views',
    filename: 'index_bundle.js'
  },
};	// ... previous config, entry, output...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/pages/index.ejs',
      templateParameters: globals,
    })
  ]
};