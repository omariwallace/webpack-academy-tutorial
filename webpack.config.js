const path = require('path') // added to enable dynamic relative path within project directory
const webpack = require('webpack')

module.exports = {
  // First file in the dependency graph that kicks off app
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // Resulting file that enables modules to run in the browser
    path: path.join(__dirname, './dist') // where should I put this bundle when I create bundle.js
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}