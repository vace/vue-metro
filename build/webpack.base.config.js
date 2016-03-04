var path = require('path')

module.exports = {
  entry :{
    'vue-metro':'./docs/index.js'
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js',
    libraryTarget:'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {test:/\.css$/,loader:'style!css'},
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    root: path.resolve('./')
  },

  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your rc
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
