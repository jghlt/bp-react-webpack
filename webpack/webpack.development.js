const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      // proxy: 'http://localhost:8080/',
      files: ['public/*'],
      server: {
        baseDir: 'public',
      }
    })
  ]
});
