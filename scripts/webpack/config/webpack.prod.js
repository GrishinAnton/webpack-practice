// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const { BUILD_DIRECTORY, PROJECT_ROOT } = require('../constants');


//Configurations
const getCommonConfig = require('./webpack.common');

// the clean options to use
const cleanOptions = {
    verbose: true,
    root:    PROJECT_ROOT,
};

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
        plugins: [
            // Каждый плагин — это конструктор
            new CleanWebpackPlugin(BUILD_DIRECTORY, cleanOptions),
        ],
    });
};
