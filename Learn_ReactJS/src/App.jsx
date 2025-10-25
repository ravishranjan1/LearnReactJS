import './App.css'
function App(){
  const name = "Ravish Ranjan";
  const obj={
    name : "Ravi",
    email : "ravi@gmail.com",
    age : 34
  }
  const userArray =["Virat","Rohit","Dhoni"]
  let x =10;
  let y =20;
  function fruit(){
    return "Apple"
  }
  const path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjejQHwtiJtDhRQgjMvlofhKEFb8Mvkx2Kw&s"
  function sum(a,b){
    return a+b;
  }
  function operation (a, b, op){
    if(op=="+"){
      return a+b;
    }
    else if(op == "-"){
      return a-b;
    }
    else{
      return a*b;
    }
  }
  return(
    <>
      <h1>JSX with Curly Braces</h1>
      <h1>{name?name:"user not found"}</h1>
      <h1>{x+y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(6,5)}</h1>
      <h1>{operation(3,4,"-")}</h1>
      <h2>{obj.email}</h2>
      <h2>{userArray[0]}</h2>
      <img src={path} alt="" />
    </>
  )
}

export default App