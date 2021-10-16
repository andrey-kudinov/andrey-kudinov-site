import React from 'react'
import { ActiveLink, Scope } from '@atoms'

const Articles = () => (
  <Scope base="/articles">
    <ActiveLink href="/grid">Grid</ActiveLink>
  </Scope>
)

export default Articles
