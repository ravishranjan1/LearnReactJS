import {useState} from "react"
function Count(){
    const[count, setCount]=useState(0);

    const[rCount, setRCount]=useState(0);
    return(
        <>
            <h1>Count : {count}</h1>
            <h1>RCount : {rCount}</h1>
            <button onClick={()=>setCount(count+1)}>count</button>
            <button onClick={()=>setRCount(rCount-1)}>rCount</button>
        </>
    )
}
export default Count;