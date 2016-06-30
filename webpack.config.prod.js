var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
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
    })
  ],
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
      loader: 'style!css'
    }    ,{
      test: /\.less$/,
      loader: 'style!css!less'
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
