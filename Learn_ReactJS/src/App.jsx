import{useState} from "react";
function App(){
  const [val1,setVal1] = useState("");
  return(
    <>
      <h1>Get Input Fields value in ReactJS</h1>
      <input type="text" value = {val1} onChange ={(event)=>setVal1(event.target.value)} placeholder = "Enter name"/>
      <h1>{val1}</h1>
      <button onClick={()=>setVal1("")}>Clear</button>
    </>
  )
}

export default App