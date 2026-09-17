interface User {
    name: string;
    isLoggedin: boolean;
}
const users: User[] = [
    {name: "John", isLoggedin: true},
    {name: "Jane", isLoggedin: false},
    {name: "Bob", isLoggedin: true},
    {name: "Alice", isLoggedin: false}
]

export default function Users (){
    return (
        <div>
            {
                users.map(user => <li> name : {user.name}, isLoggedin : {user.isLoggedin.toString()}</li>)
            }
        </div>
    )
}