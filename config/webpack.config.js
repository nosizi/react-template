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
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          options: {
            name: 'static/media/images/[name].[hash:8].[ext]',
            limit: 8192
          }
        }
      ]
    },
    plugins: {},
    optimization: {}
  }

  return webpackConfig
}
