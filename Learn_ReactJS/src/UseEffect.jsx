import {useEffect, useState} from "react";
function Use() {
    const [counter, setCounter]=useState(0);
    const [data, setData]=useState(0);

    function CallOnce(){
        console.log("Call Once")
    }
    
    useEffect(()=>{
        CallOnce();
    },[counter,data])
    return(
        <div>
            <h2>Use Effect</h2>
            <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
            <button onClick={()=>setData(data+1)}>Data{data}</button>

        </div>
    )
}
export default Use;