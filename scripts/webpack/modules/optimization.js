// Core
import ImageminWebpackPlugin from 'imagemin-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

/**
 * production — оптимизация включена только в mode: 'production'
 * development — оптимизация включена только в mode: 'development'
 * ✓ — оптимизация включена в mode: 'production' и в mode: 'development'
 */
export const optimizeBuild = () => ({
    optimization: {
        nodeEnv: 'production',

        // dependency graph → компиляция
        // module graph → output
        // chunk graph → output

        // production: минификация JavaScript.
        minimize:  false,
        minimizer: [ new TerserPlugin() ],

        // production: останавливает эмит сборки при возникновении ошибки во время компиляции.
        noEmitOnErrors: true,

        // ✓ Не добавляет в сборку пустые чанки — это уменьшает нагрузку на систему, что ускоряет ребилд.
        removeEmptyChunks:      true,
        // ✓ Объединяет эквивалентные чанки.
        mergeDuplicateChunks:   true,
        // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке (то есть уже доступен).
        removeAvailableModules: true,

        // production: находит наиболее часто-используемые модули, и даёт им наименьшие идентификаторы.
        // Таким образом наиболее часто-используемые модули смогут быть загружены в сборку быстрее.
        // Эта настройка также помогает вебпаку более эффективно компрессировать финальную сборку.
        // TODO webpack 5 remove optimization.occurrenceOrder
        occurrenceOrder: true,
    },
});

// 1. коммерческие решения
// 2. оптимизация webpack
export const optimizeImages = () => ({
    plugins: [
        new ImageminWebpackPlugin({
            imageminOptions: {
                plugins: [
                    imageminMozjpeg({
                        progressive: true,
                        quality:     60,
                    }),
                    imageminPngquant({
                        quality: 60,
                    }),
                    imageminSvgo(),
                ],
            },
        }),
    ],
});
