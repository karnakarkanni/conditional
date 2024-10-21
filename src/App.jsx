import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Condition from './conditions.jsx/cond'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Condition/>
    </>
  )
}

export default App
