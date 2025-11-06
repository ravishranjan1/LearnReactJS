const User = ({data})=>{
    return(
        <div style = {
            {
               color:"green", 
               border:"5px solid green",
               padding:"10px 30px",
               margin:"20px",
               width:"400px",
               borderRadius:"40px"
            }
        }>
            <h2>Name : <span style={{color:"red"}}>{data.name}</span></h2>
            <h3>Age : <span style={{color:"blue"}}>{data.age}</span></h3>
            <h4>Mail : <span style={{color:"orange"}}>{data.mail}</span></h4>
        </div>
    )
}
export default User;