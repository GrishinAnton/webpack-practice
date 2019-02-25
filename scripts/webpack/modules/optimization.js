// Core
import { ContextReplacementPlugin } from 'webpack';
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
        occurrenceOrder:    true,
        // production: анализирует module graph и пытается найти модули, которые можно смержить в один единый модуль.
        // ? эта настройка зависит от providedExports и usedExports.
        concatenateModules: true, // module concatenation, scope hoisting

        // ✓ определяет экспорированные сущности для каждого модуля.
        // Эта информация помогает остальным продвинутым оптимизациям вебпак.
        providedExports: true,
        // production: определяет использованные экспортированные сущности для каждого модуля.
        // Эта информация помогает остальным продвинутым оптимизациям вебпак.
        // Пример: минификаторы и DCE (dead code elimination) могут удалять неиспользованные экспорты из финальной сборки.
        // ? эта настройка зависит от providedExports
        usedExports:     true,
        // production: собирает зависимость более эффективно, если в package.json зависимости стоит этот флаг.
        // ? эта настройка зависит от providedExports и usedExports
        sideEffects:     true,

        // development: вместо числовых идентификаторов даёт модулям более понятные имена.
        // TODO webpack 5 add `moduleIds: "named"` default for development
        // TODO webpack 5 add `moduleIds: "size"` default for production
        // TODO webpack 5 remove optimization.namedModules
        namedModules: false,
        // Определяет механизм генерирования идентификатора для модуля.
        // https://webpack.js.org/configuration/optimization/#optimization-moduleids
        moduleIds:    false,

        // development: вместо числовых идентификаторов даёт чанкам более понятные имена.
        // TODO webpack 5 add `chunkIds: "named"` default for development
        // TODO webpack 5 add `chunkIds: "size"` default for production
        // TODO webpack 5 remove optimization.namedChunks
        namedChunks: true,
        // Определяет механизм генерирования идентификатора для чанка.
        // https://webpack.js.org/configuration/optimization/#optimization-chunkids
        chunkIds:    false,

        // initial chunk (vedors — react, react-dom)
        // async chunk (on demond)
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

export const filterMomentLocales = () => ({
    plugins: [ new ContextReplacementPlugin(/moment\/locale$/, /(en)/) ],
});
