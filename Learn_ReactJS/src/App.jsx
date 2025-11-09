import {useState} from "react";
import Use1 from "./UseEffect1.jsx"
function App() {
  const[count,setCount]=useState(0);
  const [data,setData]=useState(0);
  const [display, setDisplay]=useState(true);
  return (
    <>
      <h1>Side Effect</h1>
      {
        display?<Use1 count={count} data={data}/>:null
      }
      
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setData(data+1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>

    </>
  )

}

export default App