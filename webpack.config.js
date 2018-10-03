const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry       : './src/index.js',
    devServer   : {
        contentBase: './dist'
    },
    // plugins     : [
    //     new CleanWebpackPlugin(['dist']),
    //     new HtmlWebpackPlugin({
    //         title: 'Caching'
    //     })
    // ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    output      : {
        filename     : 'test.js',
        // chunkFilename: "[name].bundle.js",
        path         : path.resolve(__dirname, 'dist'),
        library      : 'lib',
        libraryTarget: 'umd',
    },
};