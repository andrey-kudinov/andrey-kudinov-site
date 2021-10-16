import { defineConfig, UserConfig } from 'vite'
import prefresh from '@prefresh/vite'

// https://vitejs.dev/config/
export const config: UserConfig = {
    resolve: {
        alias: [
            {
                find: 'react',
                replacement: 'preact/compat'
            },
            {
                find: 'react-dom',
                replacement: 'preact/compat'
            },
            {
                find: '@pages',
                replacement: `${__dirname}/src/pages`
            },
            {
                find: '@layouts',
                replacement: `${__dirname}/src/layouts`
            },
            {
                find: '@components',
                replacement: `${__dirname}/src/components`
            },
            {
                find: '@styles',
                replacement: `${__dirname}/src/styles`
            },
            {
                find: '@services',
                replacement: `${__dirname}/src/services`
            },
            {
                find: '@models',
                replacement: `${__dirname}/src/models`
            },
            {
                find: '@stores',
                replacement: `${__dirname}/src/stores`
            },
            {
                find: '@atoms',
                replacement: `${__dirname}/src/components/atoms`
            },
            {
                find: '@molecules',
                replacement: `${__dirname}/src/components/molecules`
            },
            {
                find: '@organisms',
                replacement: `${__dirname}/src/components/organisms`
            }
        ]
    },
    plugins: [prefresh()]
}

export default defineConfig(config)
