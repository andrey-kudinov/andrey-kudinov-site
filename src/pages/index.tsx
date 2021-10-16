import React from 'react'

import useLocation from 'wouter/use-location'

import Landing from './landing'
import NotFound from './404'

export const map: Record<string, Function> = {
    '/': Landing,
    default: NotFound
} as const

const Router = () => {
    let [location] = useLocation()
    let Page = map[location] || map.default

    return <Page />
}

export default Router
