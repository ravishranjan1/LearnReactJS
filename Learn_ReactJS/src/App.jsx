import Clock from "./Clock";
import {useState} from "react";
function App() {
  const[color,setColor]=useState("red");
  return (
    <>
      <h1>Clock Task</h1>
      <select defaultValue={"red"} onChange={(event)=>setColor(event.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <br /><br /><br /><br /><br />
      <Clock color={color}/>
    </>
  )

}

export default App