// ==== config/webpack.config.js ===
const path = require('path')

module.exports = function (config) {
  const isDevEnv = config.mode === 'development'

  const webpackConfig = {
    mode: config.mode,
    devtool: isDevEnv ? 'cheap-module-source-map' : false,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'static/js/[name].[hash].bundle.js'
    },
    resolve: {
      // 当引入一个js文件时，无需指定文件后缀名，即.js
      extensions: [',js'],
      // 配置alias，用于避免引用文件时繁杂的路径
      // https://webpack.js.org/configuration/resolve/#resolvealias
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, '../src'),
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: {},
    optimization: {}
  }

  return webpackConfig
}