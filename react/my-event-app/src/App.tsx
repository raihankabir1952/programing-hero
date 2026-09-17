import './App.css'
import Counter from './Counter'

function App() {

  /*
function handleEvent (){
    alert("hi")
  }
*/

//arrow function
const handleEvent = () =>{
  alert("hi")
}

const handleAddToCart = (id)=>{
  alert("Successfully added "  +id+"th item")
}

  return (
    <>
      {/* <h2>Hello</h2> */}
      <button onClick={handleEvent} >Click here</button>
      <button onClick={() =>handleAddToCart(12)} className='common'>add to cart</button>

      <h3>My-Counter-App</h3>
      <Counter></Counter>
      </>
  )
}

export default App
