const path = require('path')
// 24
const HtmlWebpackPlugin = require('html-webpack-plugin')
//29
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: { // 18
    main: './src/index.js',
    analytics: './src/analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js', //19 and 21
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 24-1
    new HtmlWebpackPlugin({
      // title: 'Webpack Evgen',
      // 27
      template: './src/index.html'
    }),
    // 29-1
    new CleanWebpackPlugin()
  ]
}