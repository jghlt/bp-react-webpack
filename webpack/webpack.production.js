const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = merge(common, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
      new WebappWebpackPlugin({
        logo: path.resolve('src/icons/icon-large.png'),
        prefix: '',
        favicons: {
          background: '#f6f6f6'
        }
      })
    ]
  }
});
