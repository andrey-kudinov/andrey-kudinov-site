import React, { useState } from 'react'
import ActiveLink from './link'
import { getColor } from '@atoms'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const links = [
    { label: 'Articles', link: '/articles' },
    { label: 'Journal', link: '/journal' },
    { label: 'Home', link: '/', class: '' },
    { label: 'About Me', link: '/about' },
    { label: 'Hire Me', link: '/hire' }
  ]

  const handleMouseEnter = (e: any) => {
    if (e.target.dataset.name === 'Home') return
    e.target.style.backgroundColor = getColor()
  }

  const handleMouseLeave = (e: any) => {
    if (e.target.dataset.name === 'Home') return
    e.target.style.backgroundColor = 'transparent'
  }

  return (
    <header className="relative bg-gray-100 shadow content">
      <nav className="nav">
        <button
          className="flex md:hidden"
          aria-expanded="false"
          type="button"
          onClick={() => setIsActive(!isActive)}
        >
          menu
        </button>
        <ul
          className={`md:flex max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:transition max-md:duration-300 max-md:ease-in-out max-md:transform${
            isActive
              ? ' max-md:translate-y-0 max-md:visible max-md:opacity-1'
              : ' max-md:-translate-y-full max-md:invisible max-md:opacity-0'
          }`}
        >
          {links.map((link, index) => {
            return (
              <li
                className={`${
                  link.label === 'Home' ? 'flex-1' : 'flex-2'
                } text-center border border-solid border-black`}
                key={index}
                data-name={link.label}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ActiveLink href={link.link}>{link.label}</ActiveLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
