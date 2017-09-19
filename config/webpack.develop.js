var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            vega: 'vega',
            d3: 'd3'
        })
    ],
    devServer: {
        compress: true,
        port: 2018,
        historyApiFallback: true,
        stats: 'minimal',
        //hot: true, //make css and js hot deploymenet giving trouble
        open: false //olways opn a new window
    }
});