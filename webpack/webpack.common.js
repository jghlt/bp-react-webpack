const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDevelopment } = require('webpack-mode');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../public/dist'),
    filename: (isDevelopment) ? '[name].js' : '[name].[chunkhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(
      ['public/dist/*'],
      {
        root: path.resolve(__dirname, '..'),
        verbose: true
      }
    ),
    new HtmlWebpackPlugin({
      cache: true,
      filename: '../index.html',
      template: './src/templates/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: (isDevelopment) ? '[name].css' : '[name].[chunkhash:8].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    'last 2 versions'
                  ]
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './'
            }
          }
        ]
      }
    ]
  }
};
