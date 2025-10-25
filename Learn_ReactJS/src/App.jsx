function App(){
  const name = "Ravish Ranjan";
  let a =10;
  let b = 50;
  return(
    <>
      <h1>{name}</h1>
      <h1>{a+b+30}</h1>
      <button onClick={()=>alert("Hello")}>Click Me</button>
    </>
  )
}

export default App