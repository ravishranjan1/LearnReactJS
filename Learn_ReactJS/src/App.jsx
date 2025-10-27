import { useState } from "react";
import Count from "./state"

function App(){
  const [fruit, setFruit]=useState("Apple");
  const update = ()=>{
    setFruit("Banana")
  }
  return(
    <>
      <h1>State in ReactJS</h1>
      <h1>{fruit}</h1>
      <button onClick={update}>Change Fruit Name</button>
      <Count />
    </>
  )
}

export default App