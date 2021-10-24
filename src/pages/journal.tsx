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
      daysArray.push({
        day: new Intl.DateTimeFormat('ru-RU', { day: '2-digit' }).format(date),
        dayWeek: new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(date),
      });
    }
    return daysArray;
  };

  const days = getDaysArray(new Date('Oct 22, 2021'), new Date('Nov 22, 2021'))

  const cellClass = 'whitespace-nowrap py-2 px-2 border border-solid border-black cell'

  const daysRender = days.map(day => {
    return (
      day.day === '01'
        ? <td className={`text-green-600 font-bold ${cellClass}`}>{day.day}</td>
        : day.dayWeek === 'сб' || day.dayWeek === 'вс'
          ? <td className={`text-red-600 font-bold ${cellClass}`}>{day.day}</td>
          : <td className={`font-bold ${cellClass}`}>{day.day}</td>
    )
  })

  daysRender.unshift(
    <td className={`first-col ${cellClass}`}>
      &nbsp;
    </td>
  )

  const rows = []
  let i = 0
  const labels = [
    'Lessons with a tutor',
    'Small talks',
    'Self-study English',
    'Pair coding',
    'React',
    'Algorithms',
    'Shopify',
    'Side projects'
  ]

  while (i < labels.length) {
    const row = []
    let n = 0

    while (n < days.length) {
      const random = Math.floor(Math.random() * 1e6);

      row.push(
        <>
          <td className={cellClass}>
            &nbsp;
            <input id={`input-${i}-${random}`} name="input" type="checkbox" />
            <label htmlFor={`input-${i}-${random}`}></label>
          </td>
        </>
      )

      n++
    }

    rows.push(
      <tr>
        {row}
      </tr>
    )

    // add label
    row.unshift(
      <td className={`first-col ${cellClass}`}>
        {labels[i]}
      </td>
    )

    i++
  }


  return (
    <div className="journal w-full h-full">
      <p className='mb-4'>This is my development journal.</p>
      <p className='mb-4'>When I do an action from the list, I will click on the cell. </p>
      <p className='mb-4'>This will mark the action as completed for that day. </p>
      <p className='mb-4'>The data will be saved in localStorage.</p>

      <div className="overflow-scroll">
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
