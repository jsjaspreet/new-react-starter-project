const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './src/server/index.js'],
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
}