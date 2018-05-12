const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
      new WebpackPwaManifest({
        includeDirectory: false,
        name: 'Name',
        short_name: 'Shortname',
        description: 'Description',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/icons/icon-small.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          },
          {
            src: path.resolve('src/icons/icon-large.png'),
            size: '1024x1024'
          }
        ]
      })
    ]
  }
});
