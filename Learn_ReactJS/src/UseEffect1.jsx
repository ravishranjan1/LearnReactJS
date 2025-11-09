import{useEffect} from "react";
function Use1({count,data}){

    useEffect(
        ()=>{
            console.log("first")
        },[]
    )
    useEffect(()=>{
        console.log("second")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("Unmount")
        }
    })

    return(
        <div>
            <h1>Unmount UseEffect</h1>
        </div>
    )
}
export default Use1;