import { addAliases } from 'module-alias'
import { config } from '../vite.config'
import type { Alias } from 'vite'

const aliases: Record<string, string> = {}

const configAliases = config.resolve.alias as Alias[]

configAliases.forEach(({ find, replacement }) => {
    if (typeof find === 'string') aliases[find] = replacement
})

addAliases(aliases)

// * ----------------------------- * //

import { renderToString } from 'react-dom/server'
import { writeFile, readFileSync } from 'fs'
import { minify } from 'html-minifier'

import { map } from '../src/pages'

const template = readFileSync('./dist/index.html')
const prerenders: Promise<string>[] = []

const remapPage = {
    '/': 'landing',
    default: '404'
} as const

const blackList = ['default'] as const

const main = async () => {
    Object.keys(map).forEach(async (page) => {
        const pageName = remapPage[page] || page

        if (blackList.includes(pageName)) return

        const { default: component } = require(`../src/pages/${pageName}.tsx`)

        const markup: string =
            typeof component === 'string'
                ? component
                : renderToString(component())

        let prerender = `${template}`.replace('<!-- app -->', markup)
        prerender = minify(prerender)

        prerenders.push(
            new Promise(async (resolve, reject) => {
                let fileName = pageName

                if (fileName === 'landing') fileName = 'index'

                writeFile(`./dist/${fileName}.html`, prerender, (error) => {
                    if (error) reject(pageName)
                    resolve(pageName)
                })
            })
        )
    })

    try {
        await Promise.all(prerenders)
    } catch (page) {
        console.warn(`Failed to prerender on page ${page}`)
        process.exit(1)
    }
}

main()
