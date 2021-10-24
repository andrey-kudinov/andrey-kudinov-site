import React from 'react'

interface IData {
  day: string
  dayWeek: string
  month: string
  year: string
  algorithms?: boolean
  'lessons-with-a-tutor'?: boolean
  'pair-coding-!'?: boolean
  react?: false
  'react-native-?'?: boolean
  'self-study-english'?: boolean
  'shopify-!'?: boolean
  'side-projects'?: boolean
  'small-talks'?: boolean
}
;[]

const Journal = () => {
  let [isOpen, setOpen] = React.useState(false)

  const getDays = (start: Date, end: Date) => {
    const daysArray = []
    for (
      let date = new Date(start);
      date <= end;
      date.setDate(date.getDate() + 1)
    ) {
      daysArray.push({
        day: new Intl.DateTimeFormat('ru-RU', { day: '2-digit' }).format(date),
        dayWeek: new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(
          date
        ),
        month: new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date),
        year: new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(date)
      })
    }
    return daysArray
  }

  const days = getDays(new Date('Oct 22, 2021'), new Date('Nov 22, 2021'))

  const cellClass =
    'whitespace-nowrap py-2 px-2 border border-solid border-black cell'

  const daysRender = days.map((day) => {
    return day.day === '01' ? (
      <td className={`text-green-600 font-bold ${cellClass}`}>{day.day}</td>
    ) : day.dayWeek === 'сб' || day.dayWeek === 'вс' ? (
      <td className={`text-red-600 font-bold ${cellClass}`}>{day.day}</td>
    ) : (
      <td className={`font-bold ${cellClass}`}>{day.day}</td>
    )
  })

  daysRender.unshift(<td className={`first-col ${cellClass}`}>&nbsp;</td>)

  const rows = []
  let i = 0
  const labels = [
    'Lessons with a tutor',
    'Small talks',
    'Self-study English',
    'Pair coding !',
    'React',
    'React Native ?',
    'Algorithms',
    'Shopify !',
    'Side projects'
  ]

  const data: IData = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : days.map((day) => {
        let obj = { ...day }
        labels.forEach(
          (label) => (obj[label.toLowerCase().replaceAll(' ', '-')] = false)
        )
        return obj
      })

  const onChange = (e: any) => {
    const numCol = e.target.dataset.numCol
    const numRow = e.target.dataset.numRow
    const label = labels[numRow].toLowerCase().replaceAll(' ', '-')

    data[numCol][label] = !data[numCol][label]

    localStorage.setItem('data', JSON.stringify(data))
  }

  while (i < labels.length) {
    const row = []
    let n = 0

    while (n < days.length) {
      const random = Math.floor(Math.random() * 1e6)

      row.push(
        <>
          <td className={cellClass}>
            &nbsp;
            <input
              id={`input-${i}-${random}`}
              name="input"
              type="checkbox"
              data-num-row={i}
              data-num-col={n}
              onChange={onChange}
              checked={data[n][labels[i].toLowerCase().replaceAll(' ', '-')]}
            />
            <label htmlFor={`input-${i}-${random}`}></label>
          </td>
        </>
      )

      n++
    }

    rows.push(<tr>{row}</tr>)

    // add label
    row.unshift(<td className={`first-col ${cellClass}`}>{labels[i]}</td>)

    i++
  }

  return (
    <div className="journal w-full h-full">
      <p className="mb-4">This is my development journal.</p>
      <p className="mb-4">
        When I do an action from the list, I will click on the cell.{' '}
      </p>
      <p className="mb-4">
        This will mark the action as completed for that day.{' '}
      </p>
      <p className="mb-4">The data will be saved in localStorage.</p>

      <div className="overflow-scroll mb-4">
        <table>
          <tr>{daysRender}</tr>
          {rows}
        </table>
      </div>

      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mb-4 rounded-full flex items-center"
        onClick={() =>
          console.log('%c%s', 'background: pink;', 'output -', data)
        }
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Get data</span>
      </button>

      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mb-4 rounded-full flex items-center"
        onClick={() => setOpen((isOpen = !isOpen))}
      >
        <span>Upload data</span>
      </button>

      {isOpen && (
        <label className="block text-left">
          <span className="text-gray-700">Paste here</span>
          <textarea
            className="form-textarea mt-1 block w-full"
            rows="10"
            placeholder="Data"
          ></textarea>
        </label>
      )}
    </div>
  )
}

export default Journal
