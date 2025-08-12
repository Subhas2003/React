import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button 
            onClick={()=>setColor("red")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'red' }}>Red</button>

            <button 
            onClick={()=>setColor("green")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Green' }}>Green</button>

            <button
            onClick={()=>setColor("yellow")}
             className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Yellow' }}>Yellow</button>

            <button 
            onClick={()=>setColor("black")}black
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'black' }}>black</button>

            <button 
            onClick={()=>setColor("Orange")}Orange
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Orange' }}>Orange</button>

            <button 
            onClick={()=>setColor("#77BEF0")}Blue
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'blue' }}>Blue</button>

            <button 
            onClick={()=>setColor("Pink")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Pink' }}>Pink</button>

            <button 
            onClick={()=>setColor("aqua")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'aqua' }}>Aqua</button>

            <button 
            onClick={()=>setColor("Violet")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Violet' }}>Violet</button>

            <button 
            onClick={()=>setColor("Indigo")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'Indigo' }}>Indigo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
