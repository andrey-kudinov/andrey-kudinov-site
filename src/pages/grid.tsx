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
      <p className="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWMGEZz" data-user="AndreyKudinov" style={{ height: '300px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}>
        <span>See the Pen <a href="https://codepen.io/AndreyKudinov/pen/QWMGEZz">
          Untitled</a> by Andrey Kudinov (<a href="https://codepen.io/AndreyKudinov">@AndreyKudinov</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </>
  )
}

export default Grid
