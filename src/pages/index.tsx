import React from 'react'

import useLocation from 'wouter/use-location'

import Home from './home'
import NotFound from './404'
import Grid from './grid'
import Articles from './articles'
import About from './about'
import Hire from './hire'
import Header from '@atoms/header'

export const map: Record<string, Function> = {
    '/': Home,
    '/grid': Grid,
    '/articles': Articles,
    '/about': About,
    '/hire': Hire,
    default: NotFound
} as const

const Router = () => {
    let [location] = useLocation()
    let Page = map[location] || map.default

    return (
        <>
            <Header />
            <Page />
        </>
    )
}

export default Router
