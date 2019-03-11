const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    // solves the issue by keeping function and class names
    // although Babel is required here because the source is ES6 and UglifyJS only deals with ES5
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache        : true,
                parallel     : true,
                uglifyOptions: {
                    compress: true,
                    ecma    : 6,
                    keep_fnames: true,
                    keep_classnames: true,
                },
                sourceMap    : true
            })

        ]
    },
    module      : {
        rules: [
            {
                test   : /\.js$/,
                include: [/src/],
                use    : {
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
};