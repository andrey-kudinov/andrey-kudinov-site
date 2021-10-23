import React from 'react'

const Journal = () => {
  const getDaysArray = (start: Date, end: Date) => {
    const options = {
      day: '2-digit',
      // month: 'long',
      // year: 'numeric'
    }
    const daysArray = []
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      daysArray.push(new Intl.DateTimeFormat('ru-RU', options).format(date));
    }
    return daysArray;
  };

  const days = getDaysArray(new Date('Oct 22, 2021'), new Date('Nov 22, 2021'))

  const daysRender = days.map(day => {
    return (
      <td className='p-2'>{day}</td>
    )
  })

  const rows = []

  for (let i = 0; i < 7; i++) {
    const row = []

    for (let n = 0; n < days.length; n++) {
      const random = Math.floor(Math.random() * 1e6);
      row.push(
        <td className='py-4 px-2 border border-solid border-black'>
          <input id={`input-${i}-${random}`} name="input" type="checkbox" />
          <label htmlFor={`input-${i}-${random}`}></label>
        </td>
      )
    }

    rows.push(
      <tr>
        {row}
      </tr>
    )
  }

  return (
    <div className="journal w-full h-full flex">
      <table>
        <tr><td className='px-2'>Somethings</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Lessons with a tutor</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Small talks</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Self-study English</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Pair coding</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">React</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Algorithms</td></tr>
        <tr><td className="whitespace-nowrap px-2 border-solid border-black">Shopify</td></tr>
      </table>

      <div className="pl-4 overflow-scroll">
        <table>
          <tr>
            {daysRender}
          </tr>
          {rows}
        </table>
      </div>
    </div >
  )
}

export default Journal
