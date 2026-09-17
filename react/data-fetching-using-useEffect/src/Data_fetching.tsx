import { useEffect,useState } from 'react'
function Data_fetching() {

  const[todos , setTodos] = useState([])  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
        return res.json()
    })
    .then((data) =>{
        setTodos(data)
        // console.log(todos)
    })

  } , [])
  return (
    <div>
      <h1>Data Fetching</h1>
      {
        todos.map((todo) =>{
            return <p key={todo.id}>{todo.title}</p>
        })
      }
    </div>
  )
}

export default Data_fetching