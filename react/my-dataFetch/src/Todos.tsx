import { use } from "react"

function Todos({userTodos}){

    const users = use(userTodos)
    // console.log(users)


    return(
        <div>
            <h1>Total todo : {users.length}</h1>
            <h2>User Todos : </h2>
            {
               users.map((user) =>(
                <div key={user.id}>
                    <h3>Title : 
                        {user.title}</h3>
                    <h2>
                          Status:
                           {user.completed ? 'Completed' : 'Pending'}
                    </h2>
                </div>
               )) 
            }

        </div>
    )
}
export default Todos