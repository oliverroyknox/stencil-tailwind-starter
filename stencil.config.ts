import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

// https://stenciljs.com/docs/config

export const config: Config = {
    globalStyle: 'src/global/app.css',
    globalScript: 'src/global/app.ts',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            // comment the following line to disable service workers in production
            serviceWorker: null,
            baseUrl: 'https://myapp.local/',
        },
    ],
    plugins: [
        postcss({
            plugins: [
                autoprefixer(),
                tailwind('./tailwind.config.js'),
                ...(!process.argv.includes('--dev') ? [purgecss({ content: ['./src/index.html', './src/**/*.tsx'] })] : []), // purge css if production build
            ],
        }),
    ],
};
