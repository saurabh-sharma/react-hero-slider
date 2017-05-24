const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require('node-bourbon').includePaths;
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
//const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

const ModernizrConfig = {
  "minify": true,
  "options": [
    "domPrefixes",
    "prefixes",
    "addTest",
    "hasEvent",
    "prefixed",
    "testAllProps",
    "testProp",
    "testStyles",
    "html5shiv",
    "setClasses"
  ],
  "feature-detects": [
    "test/applicationcache",
    "test/audio",
    "test/canvas",
    "test/canvastext",
    "test/geolocation",
    "test/hashchange",
    "test/history",
    "test/indexeddb",
    "test/input",
    "test/inputtypes",
    "test/postmessage",
    "test/svg",
    "test/video",
    "test/webgl",
    "test/websockets",
    "test/css/animations",
    "test/css/backgroundsize",
    "test/css/borderimage",
    "test/css/borderradius",
    "test/css/boxshadow",
    "test/css/columns",
    "test/css/flexbox",
    "test/css/fontface",
    "test/css/generatedcontent",
    "test/css/gradients",
    "test/css/hsla",
    "test/css/multiplebgs",
    "test/css/opacity",
    "test/css/reflections",
    "test/css/rgba",
    "test/css/textshadow",
    "test/css/transforms",
    "test/css/transforms3d",
    "test/css/transitions",
    "test/storage/localstorage",
    "test/storage/sessionstorage",
    "test/storage/websqldatabase",
    "test/svg/clippaths",
    "test/svg/inline",
    "test/svg/smil",
    "test/workers/webworkers"
  ]
}



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
    },
    {
      loader: `webpack-modernizr-loader`,
      options: ModernizrConfig,
      test: /modernizr$/
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
    alias: {
      modernizr$: path.resolve(__dirname, "./.modernizrrc")
    }
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