import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue = () => {
    if (counter === 0) {
      stop
    }
    else {
      counter = counter - 1
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
