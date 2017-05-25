const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require('node-bourbon').includePaths;
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
    },
    {
      test: /.(scss|css)$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'postcss-loader', 'sass-loader?includePaths[]=' + bourbon, ]
      })
      //loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(jpe?g|gif|png|svg)$/,
      loader: 'file-loader?emitFile=false&name=[name].[ext]&publicPath=assets/'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],

  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('style.css'),
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
    new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ]
     }
  })
  ]
};