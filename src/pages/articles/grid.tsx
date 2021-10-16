import React from 'react'

const Grid = () => {
  const code = `
    .page {
      display: grid;
      grid-template-columns:
      [full-start] minmax(12px, 1fr)
      [main-start] minmax(0, 1000px)
      [main-end] minmax(12px, 1fr)
      [full-end];
    }
    .page > * {
      grid-column: main;
    }

    <Example_1 />

    #### Возможность выходить за пределы контента (main)

    Например:

    .page > .banner {
      grid-column: full;
    }
  `

  return (
    <>
      <pre>
        {code}
      </pre>
    </>
  )
}

export default Grid
