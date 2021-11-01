import React, { useRef } from 'react'
import { Link } from 'wouter'
import { getColor } from '@atoms'

const Main = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const blockOneRef = useRef<HTMLDivElement>(null)
  const blockTwoRef = useRef<HTMLDivElement>(null)
  const blockThreeRef = useRef<HTMLDivElement>(null)
  const blockFourRef = useRef<HTMLDivElement>(null)
  const blockCenterRef = useRef<HTMLDivElement>(null)

  const handleBlockMouseLeave = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '60%'
      blockOneRef.current.style.height = '40%'
      blockOneRef.current.style.background = 'transparent'

      blockTwoRef.current.style.width = '40%'
      blockTwoRef.current.style.height = '60%'
      blockTwoRef.current.style.background = 'transparent'

      blockThreeRef.current.style.width = '40%'
      blockThreeRef.current.style.height = '60%'
      blockThreeRef.current.style.background = 'transparent'

      blockFourRef.current.style.width = '60%'
      blockFourRef.current.style.height = '40%'
      blockFourRef.current.style.background = 'transparent'

      blockCenterRef.current.style.top = '40%'
      blockCenterRef.current.style.left = '40%'
      blockCenterRef.current.style.width = '20%'
      blockCenterRef.current.style.height = '20%'
      blockCenterRef.current.style.borderColor = 'transparent'
    }
  }

  const handleBlockOneMouseEnter = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '70%'
      blockOneRef.current.style.height = '50%'
      blockOneRef.current.style.background = getColor()

      blockTwoRef.current.style.width = '30%'
      blockTwoRef.current.style.height = '70%'

      blockThreeRef.current.style.width = '50%'
      blockThreeRef.current.style.height = '50%'

      blockFourRef.current.style.width = '50%'
      blockFourRef.current.style.height = '30%'

      blockCenterRef.current.style.top = '50%'
      blockCenterRef.current.style.left = '50%'
    }
  }

  const handleBlockTwoMouseEnter = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '45%'
      blockOneRef.current.style.height = '55%'

      blockTwoRef.current.style.width = '55%'
      blockTwoRef.current.style.height = '75%'
      blockTwoRef.current.style.background = getColor()

      blockThreeRef.current.style.width = '25%'
      blockThreeRef.current.style.height = '45%'

      blockFourRef.current.style.width = '75%'
      blockFourRef.current.style.height = '25%'

      blockCenterRef.current.style.top = '55%'
      blockCenterRef.current.style.left = '25%'
    }
  }

  const handleBlockThreeMouseEnter = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '75%'
      blockOneRef.current.style.height = '40%'

      blockTwoRef.current.style.width = '25%'
      blockTwoRef.current.style.height = '60%'

      blockThreeRef.current.style.width = '55%'
      blockThreeRef.current.style.height = '60%'
      blockThreeRef.current.style.background = getColor()

      blockFourRef.current.style.width = '45%'
      blockFourRef.current.style.height = '40%'

      blockCenterRef.current.style.top = '40%'
      blockCenterRef.current.style.left = '55%'
    }
  }

  const handleBlockFourMouseEnter = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '50%'
      blockOneRef.current.style.height = '30%'

      blockTwoRef.current.style.width = '50%'
      blockTwoRef.current.style.height = '50%'

      blockThreeRef.current.style.width = '30%'
      blockThreeRef.current.style.height = '70%'

      blockFourRef.current.style.width = '70%'
      blockFourRef.current.style.height = '50%'
      blockFourRef.current.style.background = getColor()

      blockCenterRef.current.style.top = '30%'
      blockCenterRef.current.style.left = '30%'
    }
  }

  const handleBlockCenterMouseEnter = () => {
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      blockOneRef.current.style.width = '30%'
      blockOneRef.current.style.height = '70%'

      blockTwoRef.current.style.width = '70%'
      blockTwoRef.current.style.height = '30%'

      blockThreeRef.current.style.width = '70%'
      blockThreeRef.current.style.height = '30%'

      blockFourRef.current.style.width = '30%'
      blockFourRef.current.style.height = '70%'

      blockCenterRef.current.style.top = '30%'
      blockCenterRef.current.style.left = '30%'
      blockCenterRef.current.style.width = '40%'
      blockCenterRef.current.style.height = '40%'
      blockCenterRef.current.style.borderColor = 'black'
    }
  }

  return (
    <div className="home relative w-full h-full text-4xl" ref={parentRef}>
      <div
        ref={blockOneRef}
        className="block block-1 top-0 left-0 w-3/5 h-2/5"
        onMouseEnter={() => handleBlockOneMouseEnter()}
        onMouseLeave={() => handleBlockMouseLeave()}
      >
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </div>
      <div
        ref={blockTwoRef}
        className="block block-2 top-0 right-0 w-2/5 h-3/5"
        onMouseEnter={() => handleBlockTwoMouseEnter()}
        onMouseLeave={() => handleBlockMouseLeave()}
      >
        <Link href="/journal">
          <a>Journal</a>
        </Link>
      </div>
      <div
        ref={blockThreeRef}
        className="block block-3 bottom-0 left-0 w-2/5 h-3/5"
        onMouseEnter={() => handleBlockThreeMouseEnter()}
        onMouseLeave={() => handleBlockMouseLeave()}
      >
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </div>
      <div
        ref={blockFourRef}
        className="block block-4 bottom-0 right-0 w-3/5 h-2/5"
        onMouseEnter={() => handleBlockFourMouseEnter()}
        onMouseLeave={() => handleBlockMouseLeave()}
      >
        <Link href="/hire">
          <a>Hire Me</a>
        </Link>
      </div>
      <div
        ref={blockCenterRef}
        className="block block-center w-1/5 h-1/5 bg-white z-10"
        onMouseEnter={() => handleBlockCenterMouseEnter()}
        onMouseLeave={() => handleBlockMouseLeave()}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Main
