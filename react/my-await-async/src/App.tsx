import { Suspense } from 'react'
import './App.css'
import User from './User'

function App() {

const UserDataPromise = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}


  return (
    <>
    <Suspense fallback = {<p>Loading...</p>}>
    <User userDataPromise = {UserDataPromise()}></User>
    </Suspense>
    </>
    
  )
}

export default App

{/* <Suspense fallback={<div>Loading profile section...</div>}>
        <User />
      </Suspense> */}
