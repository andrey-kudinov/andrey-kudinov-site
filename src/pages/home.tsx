import React, { SyntheticEvent, useRef } from 'react'

const Main = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const blockOneRef = useRef<HTMLDivElement>(null)
  const blockTwoRef = useRef<HTMLDivElement>(null)
  const blockThreeRef = useRef<HTMLDivElement>(null)
  const blockFourRef = useRef<HTMLDivElement>(null)
  const blockCenterRef = useRef<HTMLDivElement>(null)

  const handleBlockOneOrFour = (
    e: SyntheticEvent,
    change: string,
    change2: any,
    change3: any
  ) => {
    e.stopPropagation()
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      const { width: parentWidth, height: parentHeight } =
        parentRef.current.getBoundingClientRect()
      const { width: blockOneWidth, height: blockOneHeight } =
        blockOneRef.current.getBoundingClientRect()
      const { width: blockTwoWidth, height: blockTwoHeight } =
        blockTwoRef.current.getBoundingClientRect()
      const { width: blockThreeWidth, height: blockThreeHeight } =
        blockThreeRef.current.getBoundingClientRect()
      const { width: blockFourWidth, height: blockFourHeight } =
        blockFourRef.current.getBoundingClientRect()

      blockOneRef.current.style.width = `calc(${Math.round(
        (blockOneWidth / parentWidth) * 100
      )}% ${change})`
      blockOneRef.current.style.height = `calc(${Math.round(
        (blockOneHeight / parentHeight) * 100
      )}% ${change}`

      blockTwoRef.current.style.width = `calc(${Math.round(
        (blockTwoWidth / parentWidth) * 100
      )}% ${change2})`
      blockTwoRef.current.style.height = `calc(${
        (blockTwoHeight / parentHeight) * 100
      }% ${change}`

      blockThreeRef.current.style.width = `calc(${Math.round(
        (blockThreeWidth / parentWidth) * 100
      )}% ${change}`
      blockThreeRef.current.style.height = `calc(${Math.round(
        (blockThreeHeight / parentHeight) * 100
      )}% ${change2}`

      blockFourRef.current.style.width = `calc(${Math.round(
        (blockFourWidth / parentWidth) * 100
      )}% ${change2}`
      blockFourRef.current.style.height = `calc(${Math.round(
        (blockFourHeight / parentHeight) * 100
      )}% ${change2}`

      blockCenterRef.current.style.top = `${change3}`
      blockCenterRef.current.style.left = `${change3}`
    }
  }

  const handleBlockTwoOrThree = (
    e: SyntheticEvent,
    change: string,
    change2: any,
    change3: any,
    change4: any
  ) => {
    e.stopPropagation()
    if (
      parentRef.current &&
      blockOneRef.current &&
      blockTwoRef.current &&
      blockThreeRef.current &&
      blockFourRef.current &&
      blockCenterRef.current
    ) {
      const { width: parentWidth, height: parentHeight } =
        parentRef.current.getBoundingClientRect()
      const { width: blockOneWidth, height: blockOneHeight } =
        blockOneRef.current.getBoundingClientRect()
      const { width: blockTwoWidth, height: blockTwoHeight } =
        blockTwoRef.current.getBoundingClientRect()
      const { width: blockThreeWidth, height: blockThreeHeight } =
        blockThreeRef.current.getBoundingClientRect()
      const { width: blockFourWidth, height: blockFourHeight } =
        blockFourRef.current.getBoundingClientRect()

      blockOneRef.current.style.width = `calc(${Math.round(
        (blockOneWidth / parentWidth) * 100
      )}% ${change})`
      blockOneRef.current.style.height = `calc(${Math.round(
        (blockOneHeight / parentHeight) * 100
      )}% ${change2}`

      blockTwoRef.current.style.width = `calc(${Math.round(
        (blockTwoWidth / parentWidth) * 100
      )}% ${change2})`
      blockTwoRef.current.style.height = `calc(${
        (blockTwoHeight / parentHeight) * 100
      }% ${change2}`

      blockThreeRef.current.style.width = `calc(${Math.round(
        (blockThreeWidth / parentWidth) * 100
      )}% ${change}`
      blockThreeRef.current.style.height = `calc(${Math.round(
        (blockThreeHeight / parentHeight) * 100
      )}% ${change}`

      blockFourRef.current.style.width = `calc(${Math.round(
        (blockFourWidth / parentWidth) * 100
      )}% ${change2}`
      blockFourRef.current.style.height = `calc(${Math.round(
        (blockFourHeight / parentHeight) * 100
      )}% ${change}`

      blockCenterRef.current.style.top = `${change3}`
      blockCenterRef.current.style.left = `${change4}`
    }
  }

  return (
    <div className="home" ref={parentRef}>
      <div
        ref={blockOneRef}
        className="block block-1"
        onMouseEnter={(e) => handleBlockOneOrFour(e, '+ 10%', '- 10%', '50%')}
        onMouseLeave={(e) => handleBlockOneOrFour(e, '- 10%', '+ 10%', '40%')}
      ></div>
      <div
        ref={blockTwoRef}
        className="block block-2"
        onMouseEnter={(e) =>
          handleBlockTwoOrThree(e, '- 10%', '+ 10%', '50%', '30%')
        }
        onMouseLeave={(e) =>
          handleBlockTwoOrThree(e, '+ 10%', '- 10%', '40%', '40%')
        }
      ></div>
      <div
        ref={blockThreeRef}
        className="block block-3"
        onMouseEnter={(e) =>
          handleBlockTwoOrThree(e, '+ 10%', '- 10%', '30%', '50%')
        }
        onMouseLeave={(e) =>
          handleBlockTwoOrThree(e, '- 10%', '+ 10%', '40%', '40%')
        }
      ></div>
      <div
        ref={blockFourRef}
        className="block block-4"
        onMouseEnter={(e) => handleBlockOneOrFour(e, '- 10%', '+ 10%', '30%')}
        onMouseLeave={(e) => handleBlockOneOrFour(e, '+ 10%', '- 10%', '40%')}
      ></div>
      <div ref={blockCenterRef} className="block block-center"></div>
    </div>
  )
}

export default Main
