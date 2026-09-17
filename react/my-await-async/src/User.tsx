//1 => callback
/*
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{console.log(data)})
*/

import { use } from "react"

//2 => await/async
/*
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data 
}
*/
//3=> await/async for arrow function
/*
const loadData = async() =>
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}
*/
/*
*1.NEED suspense fallback
*2.create a promise to load data
*3.send the promise to component for load data
*4. Use use() to read the Promise and render the data
*/



function User({userDataPromise}){

    const users = use(userDataPromise)
    console.log(users)

    return(
        <div>
            {/* <h2>{users.length}</h2> */}
            <h2>Users: </h2>
            {
                users.map((user) =>(
                    <div key = {user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default User