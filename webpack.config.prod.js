var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index',
    vendor:  [
        'react',
        'react-dom',
        'react-router',
        'history',
        'react-loading'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  // externals:{
  //   'react': 'React'
  // },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js',Infinity),
    new ExtractTextPlugin("[name].css",{allChunks: true})
  ],
  // alias:{
  //   react: '/dist/react.min'
  // },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader:  ExtractTextPlugin.extract("style-loader", "css-loader")
    }    ,{
      test: /\.less$/,
      loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    },{
      test: /\.(png|jpeg)$/,
      loader: 'url-loader?limit=6000&name=img/[name].[hash].[ext]'
    },{
      test: /\.jpg$/,
      loader: 'file'
    },{
      test: /\.(ttf|eot|svg|woff(2))$/,
      loader: 'file'
    }]
  }
};
