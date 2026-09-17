type StudentProps={
    name : string;
    age : number;
    dept : string;
    university : string;
    email : string;
    isActive : boolean;  //use this property for conditional rendering.
}


function Students({name,age,dept,university,email,isActive} : StudentProps){
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Age : {age}</p>
            <p>
                Department : {dept}
            </p>
            <p className={university.includes("AIUB") ? "escape" : "stay"}>
                University : {university}
            </p>
            <p>
                Email Address : {email}
            </p>
            <p className={isActive ? "active" : "inactive"}> // its called conditional css
                Status : {isActive ? "Active" : "Inactive"}  // and its called conditional rendering
            </p>
        </div>
    )
}
export default Students;