import { useEffect, useState, useMemo } from 'react'
import './App.css'
import dayjs from 'dayjs'
import NumberDisplay from './components/NumberDisplay'

const RandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
  const [numberString, setNumberString] = useState('0.123')
  const [time, setTime] = useState(Date.now().valueOf())
  const [display, setDisplay] =useState(true)

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf())
    }, 1000)
  }, [])
  const timeString = useMemo(() => {
    return dayjs(time).format('HH:mm:ss')
  }, [time])


  useEffect(() => {
    setInterval(() => {
      setNumberString(RandomNumber(100, 999).toString())
    }, 2000)
  }, [])

  return (
    <div className="App">
      <button onClick={() => {
        setDisplay(!display)
      }}>switch</button>
      <NumberDisplay numberString={display?timeString:numberString} />
    </div>
  )
}

export default App
