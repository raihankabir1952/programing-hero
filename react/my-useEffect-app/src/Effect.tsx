import { useEffect, useState } from "react";

function Effect (){

    const [count , setCount] = useState(0)

    //anonymous function
    /*
    useEffect(() =>{
        console.log("useEffect")
    })
    */
   // ai function just akbar e call hobe for this []
    
    useEffect(() =>{
        console.log("useEffect")
    }, [])



    function handle () {
        setCount(count + 1)
    }

    return(
        <div>
            
            <h2>Count : {count}</h2>
            <button onClick={handle}>+</button>
        </div>
    )
}
export default Effect;