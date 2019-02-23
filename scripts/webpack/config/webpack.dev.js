// Core
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

//Configurations
const getCommonConfig = require('./webpack.common');

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return merge(getCommonConfig(), {
        mode:    'none',
        devtool: false,
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        plugins: [
            // Каждый плагин — это конструктор
            new HotModuleReplacementPlugin(),
        ],
    });
};
