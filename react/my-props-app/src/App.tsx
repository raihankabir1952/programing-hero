import Students from "./Students";
import './App.css'

function App (){
  return(
    <div>
      <h2>Student Information</h2>
       <Students
        name="Raihan"
        age={22}
        dept="CSE"
        university="AIUB"
        email="rai@example.com"
        isActive={true}
        />
       <Students
        name="Raihan"
        age={22}
        dept="CSE"
        university="IUB"
        email="raihan@example.com"
        isActive={false}
        />
       <Students
        name="Raihan"
        age={22}
        dept="CSE"
        university="NSU"
        email="raihan@example.com"
        isActive={true}
        />
    </div>
  )

}

export default App
