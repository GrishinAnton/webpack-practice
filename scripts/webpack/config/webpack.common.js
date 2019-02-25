// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
export default () => {
    const { NODE_ENV } = process.env;
    const IS_DEV = NODE_ENV === 'development';

    console.log(IS_DEV);

    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:          BUILD_DIRECTORY,
                filename:      'js/bundle.[hash:5].js',
                chunkFilename: 'js/bundle.[chunkhash:5].js',

                // chunkFilename: IS_DEV
                //     ? 'js/[name].[hash].[id]'
                //     : 'js/[name].[chunkhash:5].[id].js',
                // filename: IS_DEV
                //     ? 'js/[name].[hash].[id]'
                //     : 'js/[name].[contenthash:5].[id].js',
                // chunkFilename: IS_DEV
                //     ? 'js/[name].[hash].[id]'
                //     : 'js/[name].[chunkhash:5].[id].js',
                publicPath: '/',
            },
        },
        modules.defineEnvVariables(),
        modules.loadJavaScript(),
        modules.loadSass(),
        modules.loadFonts(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.setupHtml(),
        modules.filterMomentLocales(),
    );
};
