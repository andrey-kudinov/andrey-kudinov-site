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

  console.log(days)

  const daysRender = days.map(day => {
    return (
      <span className='px-2'>{day}</span>
    )
  })

  return (
    <div className="journal w-full overflow-scroll h-full">
      <span>Table</span>
      <div className="journal__row">
        {daysRender}
      </div>
      <div className="">
        <p>Something 1</p>
        <p>Something 2</p>
        <p>Something 3</p>
        <p>Something 4</p>
        <p>Something 5</p>
        <p>Something 6</p>

      </div>
    </div>
  )
}

export default Journal
