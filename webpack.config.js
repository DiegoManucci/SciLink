const path = require('path');
const dotenv = require('dotenv-webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: "index.bundle.js",
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // template file
            filename: 'index.html', // output file
        }),
        new dotenv({
            systemvars: true
        })
    ],
    devServer: {
        port: 8000,
        liveReload: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            },
        ]
    }
};