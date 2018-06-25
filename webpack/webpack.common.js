const path = require('path');
const config = require('../package');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { isDevelopment } = require('webpack-mode');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    publicPath: `${config.project.paths.public}`,
    path: path.resolve(__dirname, `..${config.project.paths.system}`),
    filename: (isDevelopment) ? '[name].js' : '[name].[chunkhash:8].js',
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(
      ['./public'],
      {
        root: path.resolve(__dirname, '..'),
        verbose: true,
        exclude: [
          '.htaccess'
        ]
      }
    ),
    new HtmlWebpackPlugin({
      cache: true,
      inject: false,
      project: config.project,
      filename: '../index.html',
      template: './assets/templates/index.html',
      alwaysWriteToDisk: (isDevelopment),
      minify: (isDevelopment) || {
        minifyJS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false,
        processScripts: ['application/ld+json']
      }
    }),
    new HtmlWebpackHarddiskPlugin(),
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
