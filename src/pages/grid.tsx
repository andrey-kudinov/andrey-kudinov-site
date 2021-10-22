import React from 'react'

const Grid = () => {
  const exampleFirst = `
    #### Плавное уменьшение отступов по бокам
    
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

    #### Возможность выходить за пределы контента

    Например:

    .page > .banner {
      grid-column: full;
    }
  `

  const exampleSecond = `
    #### Возможность создавать блоки с адаптивными размерами

    .page {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
      grid-template-rows: min-content;
      gap: 1rem;
    }
  `

  const exampleThird = `
    #### Или делать тоже самое, но заполнять оставшееся место в строке

    .page {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
      grid-template-rows: min-content;
      gap: 1rem;
    }
  `

  return (
    <div className="grid gap-4 w-full">
      <pre>
        {exampleFirst}
      </pre>

      <iframe
        className="w-full"
        height="500"
        scrolling="no"
        title="Grid Page"
        src="https://codepen.io/AndreyKudinov/embed/QWMGEZz?default-tab=result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AndreyKudinov/pen/QWMGEZz"> Grid Page</a>
        by Andrey Kudinov(<a href="https://codepen.io/AndreyKudinov"> @AndreyKudinov</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <pre>
        {exampleSecond}
      </pre>

      <iframe
        className="w-full"
        height="500"
        scrolling="no"
        title="Grid Auto Fill"
        src="https://codepen.io/AndreyKudinov/embed/PoKbrpm?default-tab=result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AndreyKudinov/pen/QWMGEZz"> Grid Auto Fill</a>
        by Andrey Kudinov(<a href="https://codepen.io/AndreyKudinov"> @AndreyKudinov</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <pre>
        {exampleThird}
      </pre>

      <iframe
        className="w-full"
        height="500"
        scrolling="no"
        title="Grid Auto Fit"
        src="https://codepen.io/AndreyKudinov/embed/jOLVjYp?default-tab=result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AndreyKudinov/pen/jOLVjYp"> Grid Auto Fit</a>
        by Andrey Kudinov(<a href="https://codepen.io/AndreyKudinov"> @AndreyKudinov</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  )
}

export default Grid
