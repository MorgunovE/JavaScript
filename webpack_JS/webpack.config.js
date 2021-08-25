const path = require('path')
// 24
const HtmlWebpackPlugin = require('html-webpack-plugin')
//29
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 83
const CopyWebpackPlugin = require('copy-webpack-plugin')
//85
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 98
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
// 169
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
// 85-2
const isDev = process.env.NODE_ENV === 'development'
// 91-1
const isProd = !isDev
// console.log('Is DEV: ', isDev)
// 98-1
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if(isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}
// 108-2
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
// 118
const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {}
    },
    'css-loader'
  ]
  if(extra) {
    loaders.push(extra)
  }
  return loaders
}
//142
const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    // plugins: {
    //   ['@babel/plugin-proposal-class-properties']
    // }
  }
  if(preset) {
    opts.presets.push(preset)
  }
  return opts
}
// 155-2
const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions() //142-1
    }
  ]
  if(isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}
// 168
const plugins = () => {
  const base = [
    // 24-1
    new HtmlWebpackPlugin({
      // title: 'Webpack Evgen',
      // 27
      template: './index.html',
      // 91
      minify: {
        collapseWhitespace: isProd
      }
    }),
    // 29-1
    new CleanWebpackPlugin(),
    // 83
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    // 85-2
    new MiniCssExtractPlugin({
      filename: filename('.css') //108-1
    })
  ]
  if(isProd) {
    base.push(new BundleAnalyzerPlugin())
  }
  return base
}

module.exports = {
  // 33
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: { // 18
    main: ['@babel/polyfill', './index.jsx'], //129 and 149
    analytics: './analytics.ts',//138
  },
  output: {
    filename: filename('js'), //19 and 21 and 108
    path: path.resolve(__dirname, 'dist')
  },
  // 61
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      // 63
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // 72 and 98-2
  optimization: optimization(),
  // 76
  devServer: {
    port: 4200,
    hot: isDev
  },
  // 151
  devtool: isDev ? 'source-map' : false,
  plugins: plugins(), //168
  // 36
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders() //118-1
        // use: [{
        //   // 85-1
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     // hmr: isDev,
        //     // reloadAll: true
        //   }
        // }, 'css-loader'] //85-1
      },
      // 101
      {
        test: /\.less$/,
        use: cssLoaders('less-loader') //118-2
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {}
        // },
        //   'css-loader',
        //   'less-loader',
        // ]
      },
      // 113
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader') //118-3
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {}
        // },
        //   'css-loader',
        //   'sass-loader',
        // ]
      },
      {
        // 43
        test: /.(png|jpg|jpeg|svg|gif)$/,
        type: 'asset/resource',//43
      },
      // 49
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',//49
      },
      //54
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      // 57
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      // 123
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(), //155-1
        // 155
        // use: {
        //   loader: 'babel-loader',
        //   options: babelOptions() //142-1
        // }
      },
      // 135
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript') //142-2
        }
      },
      // 143
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      },
    ]
  },
}