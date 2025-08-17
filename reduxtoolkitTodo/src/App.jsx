import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
  import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
     <h1 className='text-3xl '>Learn about redux toolkit</h1>
     <AddTodo/>
     <Todos/>
     <Toaster position='top-right'/>
    </>
  )
}

export default App
