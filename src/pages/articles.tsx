// import { Header } from '@atoms'
import React from 'react'
import { Link, useLocation } from 'wouter'

const Articles = () => {
  // const [location, setLocation] = useLocation(); 

  return (
    <>
      <span>Articles</span>
      {/* <Header /> */}
      <Link href="/articles/grid">Grid</Link>
      {/* <a href="/articles/grid">Grid</a> */}
      {/* <a onClick={() => setLocation("/articles/grid")}>Click to update</a> */}
    </>
  )
}

export default Articles
