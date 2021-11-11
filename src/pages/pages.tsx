import React from 'react'

import useLocation from 'wouter/use-location'

import { Home, NotFound, Articles, About, Hire, Grid, Journal, Algorithms } from './'
import { Header } from '@atoms'

export const map: Record<string, Function> = {
  '/': Home,
  '/articles': Articles,
  '/about': About,
  '/hire': Hire,
  '/journal': Journal,
  '/articles/grid': Grid,
  '/articles/algorithms': Algorithms,
  default: NotFound
} as const

const Router = () => {
  let [location] = useLocation()
  let Page = map[location] || map.default
  console.log(location)
  return (
    <div className={`min-h-screen ${location !== '/' ? 'page' : ''}`}>
      {location !== '/' && <Header />}
      <main className={`place-items-center w-full h-full content py-4 overflow-x-hidden ${location !== '/' ? '' : 'min-h-screen'}`}>
        <Page />
      </main>
    </div>
  )
}

export default Router
