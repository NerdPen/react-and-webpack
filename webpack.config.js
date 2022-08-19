const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'clientApp/src/index.tsx'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'clientApp/public/index.html'),
            inject: 'body',
        }),
    ],
};
