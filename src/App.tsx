import { useEffect, useState, useMemo } from 'react'
import { Switch } from 'antd';
import NumberDisplay from './components/NumberDisplay'
import {ClockCircleOutlined,LoadingOutlined} from '@ant-design/icons'
import './App.css'
import dayjs from 'dayjs'


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

  const onChange = (checked: boolean) => {
    setDisplay(!display)
  };

  return (
    <div className="App">
      <Switch checkedChildren={<ClockCircleOutlined />}
      unCheckedChildren={<LoadingOutlined />}
      defaultChecked onChange={onChange} 
      className='switchBtn'/>
      <NumberDisplay numberString={display?timeString:numberString} />
    </div>
  )
}

export default App
