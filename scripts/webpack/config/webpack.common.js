// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('../constants');


/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        entry:  [ SOURCE_DIRECTORY ],
        output: {
            path:     BUILD_DIRECTORY,
            filename: 'boundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use:  {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [
            // Каждый плагин — это конструктор
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Изучаем вебпак! 🚀',
                favicon:  './static/favicon.ico',
            }),
        ],
    };
};
