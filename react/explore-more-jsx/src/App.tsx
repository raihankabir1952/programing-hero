import './App.css'
import Todo from './Todo'

//main function
function App() {
return (
    <>
    <h1 className='start'> My React </h1>
    {/* <Person></Person>
    <Person2></Person2> */}
    <Student name="Karim" gpa="3.5"></Student>
    <Student name="Rarim" gpa="3.55"></Student>
    <Student name="Barim" gpa="3.4"></Student>
    <Todo topics="React"></Todo>
    <Todo topics="JavaScript"></Todo>
    </>
   
  )
}


function Student(Props){
  return(
    <div className='student'>
      <h3>Name : {Props.name} </h3>
      <p>Grades : {Props.gpa}</p>
    </div>
  )
}


// function Person(){
//   return (
//     <>
//       <p>Person</p>
//     </>
//   )
// }

// function Person2(){
//   const money = 2000;
//   return (   
//     <>
//     <p>Person 2 {money}</p>
//     </>
//   )
// }

export default App
