// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const { BUILD_DIRECTORY, PROJECT_ROOT, SOURCE_DIRECTORY } = require('./constants');


// the clean options to use
const cleanOptions = {
    verbose: true,
    root: PROJECT_ROOT,
};

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        entry: [
            'webpack-hot-middleware/client?reload=true&quiet=true',
            SOURCE_DIRECTORY
        ],
        output: {
            path: BUILD_DIRECTORY,
            filename: 'boundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ],
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
            new CleanWebpackPlugin(BUILD_DIRECTORY, cleanOptions),
            new HotModuleReplacementPlugin(),
        ],
    };
};
