const path = require("path")

module.exports = {
    entry: {
      app: './client/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", 
        publicPath: '/',
      },
      module: {
          rules: [ { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
}