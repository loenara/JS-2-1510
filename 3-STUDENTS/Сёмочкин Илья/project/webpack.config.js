const path = require('path'); // переменная пути объявляется для того чтобы сборка могла создать абсолютный путь к папке и создать ее в случае необходимости. В ней функция require
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // ---> сверху мы объявляем все константы, которые имеют отношение к модулю ниже, в т.ч. те что относятся к подлючаемым плагинам

module.exports = {
    entry: './src/index.js', //путь к входному файлу Js ----> такие путь и имя по умолчанию всегда, если в этом случае опустить этот пункт то ничего не изменится
    output: { // отвечает за формирование собранного файла со скриптами - общего собранного файла Js
        path: path.resolve(__dirname, 'dist'), //путь к папке
        filename: 'js/bundle.js' //путь к файлу
    },
    mode: 'production', //замена аналогичному свойству в файле package.json ------> определение режима отображения сборки
    plugins: [ //далее подключаем плагины, которые будут работать по html, css и прикрепленным изображениям (копирование файлов)
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyPlugin({
            patterns: [{ from: './src/assets/img', to: './img' }]
        }), 
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
    ], // подключили
    module: { // подключение модулей
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ]
    }
}