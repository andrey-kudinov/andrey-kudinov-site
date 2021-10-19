import React from 'react'

import useLocation from 'wouter/use-location'

import { Home, NotFound, Articles, About, Hire, Grid } from './'
import { Header } from '@atoms'

export const map: Record<string, Function> = {
  '/': Home,
  '/articles': Articles,
  '/about': About,
  '/hire': Hire,
  '/articles/grid': Grid,
  default: NotFound
} as const

const Router = () => {
  let [location] = useLocation()
  let Page = map[location] || map.default

  return (
    <div className="min-h-screen page">
      <Header />
      <main className="place-items-center w-full content">
        <Page />
      </main>
    </div>
  )
}

export default Router
