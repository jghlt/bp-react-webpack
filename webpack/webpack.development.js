const config = require('./config');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  devServer: {
    contentBase: './public',
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: `${config.urls.proxy}`,
      files: [`${config.paths.system}*`]
    })
  ]
});
