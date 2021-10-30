import React, { useRef } from 'react'
import { Link } from 'wouter'

const Main = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const blockOneRef = useRef<HTMLDivElement>(null)
  const blockTwoRef = useRef<HTMLDivElement>(null)
  const blockThreeRef = useRef<HTMLDivElement>(null)
  const blockFourRef = useRef<HTMLDivElement>(null)
  const blockCenterRef = useRef<HTMLDivElement>(null)

  const colors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen'
  ]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const handleBlockLeave = () => {
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
    }
  }

  const handleBlockOneEnter = () => {
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
      blockOneRef.current.style.background = getRandomColor()

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

  const handleBlockTwoEnter = () => {
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
      blockTwoRef.current.style.background = getRandomColor()

      blockThreeRef.current.style.width = '25%'
      blockThreeRef.current.style.height = '45%'

      blockFourRef.current.style.width = '75%'
      blockFourRef.current.style.height = '25%'

      blockCenterRef.current.style.top = '55%'
      blockCenterRef.current.style.left = '25%'
    }
  }

  const handleBlockThreeEnter = () => {
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
      blockThreeRef.current.style.background = getRandomColor()

      blockFourRef.current.style.width = '45%'
      blockFourRef.current.style.height = '40%'

      blockCenterRef.current.style.top = '40%'
      blockCenterRef.current.style.left = '55%'
    }
  }

  const handleBlockFourEnter = () => {
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
      blockFourRef.current.style.background = getRandomColor()

      blockCenterRef.current.style.top = '30%'
      blockCenterRef.current.style.left = '30%'
    }
  }

  const handleBlockCenterEnter = () => {
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
    }
  }

  return (
    <div className="home" ref={parentRef}>
      <div
        ref={blockOneRef}
        className="block block-1"
        onMouseEnter={() => handleBlockOneEnter()}
        onMouseLeave={() => handleBlockLeave()}
      >
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </div>
      <div
        ref={blockTwoRef}
        className="block block-2"
        onMouseEnter={() => handleBlockTwoEnter()}
        onMouseLeave={() => handleBlockLeave()}
      >
        <Link href="/journal">
          <a>Journal</a>
        </Link>
      </div>
      <div
        ref={blockThreeRef}
        className="block block-3"
        onMouseEnter={() => handleBlockThreeEnter()}
        onMouseLeave={() => handleBlockLeave()}
      >
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </div>
      <div
        ref={blockFourRef}
        className="block block-4"
        onMouseEnter={() => handleBlockFourEnter()}
        onMouseLeave={() => handleBlockLeave()}
      >
        <Link href="/hire">
          <a>Hire Me</a>
        </Link>
      </div>
      <div
        ref={blockCenterRef}
        className="block block-center"
        onMouseEnter={() => handleBlockCenterEnter()}
        onMouseLeave={() => handleBlockLeave()}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Main
