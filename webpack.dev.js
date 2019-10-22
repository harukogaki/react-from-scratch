const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      contentBase: './dist',
      hot: true,
      proxy: { 
        '/api/*': {
          "pathRewrite": {
            "^/api": ""
          },
          target: 'http://localhost:8080/',
          changeOrigin: true,
          logLevel: 'debug'
        }
      }
    }
})