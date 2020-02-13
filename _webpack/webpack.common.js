const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/client/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../_dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    // after the module rules
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My website',
            template: path.resolve(__dirname, '../_templates/client.html'),
        }),
    ],
};