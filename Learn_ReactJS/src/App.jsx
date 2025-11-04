

import Wrapper from "./Wrapper"

function App(){
  
  return(
    <>
      <h1>Props in ReactJS</h1>
      <Wrapper/>
      <Wrapper color="orange"><h1>Hello</h1></Wrapper>
      <Wrapper><h1>Hello</h1>
        <h2 style={{color:"red"}}>hey</h2>
      </Wrapper>
    </>
  )
}

export default App