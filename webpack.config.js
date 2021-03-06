/**
 *   ./webpack.config.js
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
   entry: './src/index.js',
   output: {
     path: path.resolve('build'),
     filename: 'bundle.js'
   },
   module: {
     rules: [
       {
         test: /\.js[x]?$/,
         use: ['babel-loader'],
         exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        },
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader']
         })
       },
     ],
   },
   plugins: [
     new ExtractTextPlugin('style.css')
   ],
   devServer: {
     historyApiFallback: true
   }
 }
