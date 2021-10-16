import React from 'react'
import ActiveLink from './link'

const Header = () => {
  const [isActive, setIsActive] = React.useState(false)
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Articles', link: '/articles' },
    { label: 'About Me', link: '/about' },
    { label: 'Hire Me', link: '/hire' }
  ]

  return (
    <header className="relative bg-gray-100 shadow content">
      <div className="p-4 flex justify-between items-center">
        <ActiveLink href="/" className="font-bold text-base">
          Andrey Kudinov
        </ActiveLink>
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
            className={`md:flex max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:transition max-md:duration-300 max-md:ease-in-out max-md:transform${isActive
                ? ' max-md:translate-y-0 max-md:visible max-md:opacity-1'
                : ' max-md:-translate-y-full max-md:invisible max-md:opacity-0'
              }`}
          >
            {links.map((link, index) => {
              return (
                <li className="py-6 px-4" key={index}>
                  <ActiveLink href={link.link}>
                    {link.label}
                  </ActiveLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
