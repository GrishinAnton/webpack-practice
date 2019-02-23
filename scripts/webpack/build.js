//SuperChargerProfile
const webpack = require('webpack');

//Config
const getProdConfig = require('./config/webpack.prod');
const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return null;
    }

    const info = stats.toString({
        hash:        true,
        colors:      true,
        version:     true,
        env:         true,
        modules:     false,
        entrypoints: false,
    });

    console.log(info);

    if (stats.hasErrors()) {
        console.log('Error');
    }

    if (stats.hasWarnings()) {
        console.log('Warning');
    }
});
