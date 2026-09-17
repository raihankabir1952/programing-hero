
import './App.css'

//main function
function App() {

  return (
    <>
    <h1 className='start'> Get started </h1>
    <Person></Person>
    <Person2></Person2>
    </>
   
  )

}

function Person(){
  return (
    <>
      <p>Person</p>
    </>
  )
}

function Person2(){
  const money = 2000;
  return (   
    <>
    <p>Person 2 {money}</p>
    </>
  )
}

export default App
