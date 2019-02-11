module.exports = api => {
    // const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV

    // api.cache.using(() => env === 'development'); // TODO: прорисёрчить

    api.cache.never();

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                    spec: true, // specification, делает код более медленным, но более надёжным
                    loose: false, // делает код более быстрым, но отходит от стандарта
                },
            ],
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    };
};
