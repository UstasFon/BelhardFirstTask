const path = require('path');
const webpack = require('webpack');
module.exports = {
    devServer: {
        open: true,
        inline: true,
        contentBase: './dist',
        port: 9000,
        historyApiFallback: true,
        hot: true,
    },
    devtool: 'cheap-module-eval-source-map',
    entry: '../client/index.js',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["syntax-async-functions"]
                    }
                }
            },
            {
                test: /\.(png|jpeg|gif|ttf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "js/bundle.js",
        publicPath: '/'
    },
};