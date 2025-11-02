import { useState } from "react";
//Toggle
// function user(){
//     const [display, setDisplay] = useState(true);
//     return (
//         <>
//             <h1>Toggle in React JS</h1>
//             <button onClick = {()=>setDisplay(!display)}>Toggle</button>
//             {
//                 display?<h1>Ravish Ranjan</h1>:null
//             }
            
//         </>
//     )
// }
// export default user;


//Multiple Condition
function user(){
    const [count, setCount]= useState(0);

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button>
            {
                count==0?<h1>Condition0</h1>:
                count==1?<h1>Condition1</h1>:
                count==2?<h1>Condition2</h1>:
                count==3?<h1>Condition3</h1>:
                <h1>More Condition</h1>
            }
            
        </>
    )
}
export default user;