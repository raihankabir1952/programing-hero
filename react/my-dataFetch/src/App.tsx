import { Suspense } from 'react'
import './App.css'
import Todos from './Todos'

function App() {
  const UserTodos = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data;
  }

  
  return(
    <div>
      <Suspense fallback = {<p className='loading'>Loading...</p>}>
        <Todos userTodos = {UserTodos()}></Todos>
      </Suspense>
    </div>
  )
}

export default App


/*
1 => fetch data from backend
2 => suspense
3 => use
4 => show data in ui(map)
*/
