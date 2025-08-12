import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-900 font-bold bg-amber-600 p-2 rounded-xl mb-5'>Tailwind Test</h1>
     <Card Name='Munain' btnText="Click me!"/>
     <Card Name='Subhas ' />
    </>
  )
}

export default App
