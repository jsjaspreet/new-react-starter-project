const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

const vendor_libs = [
  'react', 'babel-polyfill', 'react-dom', 'react-router-dom'
]

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/client/index.js'],
    vendor: vendor_libs
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[chunkhash].[id].[name].js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      template: 'src/server/index.html',
      title: 'Starter Project',
      favicon: './favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}