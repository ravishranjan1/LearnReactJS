import { useState } from "react";
function User(){
    const [display, setDisplay] = useState(true);
    return (
        <>
            <h1>Toggle in React JS</h1>
            <button onClick = {()=>setDisplay(!display)}>Toggle</button>
            {
                display?<h1>Ravish Ranjan</h1>:null
            }
            
        </>
    )
}
export default User;