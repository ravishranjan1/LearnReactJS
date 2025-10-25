import Head from './Header'
function App(){
  return(
    <div>
      <h1>First Component</h1>
      <Fruit />
    </div>
  )
}

function Fruit(){
  return(
    <div>
      < Head/>
      <h1>Apple</h1>
      <h2>Banana</h2>
      <Color />
    </div>
  )
}

function Color(){
  return(
    <div>
      <h1>Red</h1>
      <h4>Blue</h4>
    </div>
  )
}


export default App