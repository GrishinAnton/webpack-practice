//SuperChargerProfile
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const portfinder = require('portfinder');

//Config
const getConfig = require('./webpack.config.js');
const compiler = webpack(getConfig());

//Const

const { HOST, PORT } = require('./constants');

const server = new DevServer(compiler, {
    host:               HOST,
    port:               PORT,
    historyApiFallback: true,
    overlay:            true,
    quiet:              true,
    clientLogLevel:     'none',
    noInfo:             true,
    after:              (app) => {
        app.use(hot(compiler, {
            log: false,
        }));
    },
});

portfinder.basePort = PORT;

portfinder.getPort(function (err, port) {
    server.listen(port, HOST, () => {
        console.log('serverStart');
    });
});
