import './App.css'
function App(){
  function callFun(){
    alert("Function called");
  }
  const fruit = (name)=>{
    alert(name);
  }
  return(
    <>
      <h1>Event And Function Call</h1>
      <button onClick={callFun}>click me</button>
      <button onClick={()=>fruit("Apple")}>Apple</button>
      <button onClick={()=>{fruit("Banana")}}>Banana</button>
    </>
  )
}

export default App