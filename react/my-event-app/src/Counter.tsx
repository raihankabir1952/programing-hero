import { useState } from "react";

export default function Counter(){

        const[count,setCount] = useState(0)

        // const increaseCount = () =>{
        //     setCount(count + 1)
        // }
        // const decreaseCount =() =>{
        //     setCount(count -1)
        // }

    return(
        <div>  
            <p>initial count : {count}</p>                                                 
            {/* <button onClick={increaseCount} className="common common1">+</button>
            <button onClick={decreaseCount} className="common common2">-</button>    */}
            <button onClick={() =>setCount(count + 1)}
             className="common common1"   > + 
                </button>
            <button onClick={() =>setCount(count - 1)}
              className="common common2"> - 
                </button>
        </div>
    )
}