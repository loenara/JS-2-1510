const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', //путь по умолчанию
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
            new CopyPlugin({
                patterns: [{ from: path.resolve(__dirname, 'src', 'assets', 'img'), 
                             to: path.resolve(__dirname,'dist', 'img') }]
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[id].css'
            })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ]
    }

}