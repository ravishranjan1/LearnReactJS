import {useState, useEffect} from "react";
function Clock({color}){
    const [time,setTime]=useState(new Date());

    useEffect(() => {
        // har 1 second baad time update hoga
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup jab component unmount ho
        return () => clearInterval(timer);
    }, []);
    
    return(
        
        <div style={
            {
                color:color,
                background:"black",
                width:"150px",
                fontSize:"40px",
                borderRadius:"10px",
                padding:"5px"
            }
        }>
            
            {time.toLocaleTimeString()}
        </div>
    )
}
export default Clock