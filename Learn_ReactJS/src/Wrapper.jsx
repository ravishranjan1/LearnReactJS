function Wrapper({children, color="green"}){
    return(
        <div style={{color:color, border:"5px solid green"}}>
            <h1>Hi Everyone</h1>
            {children}
        </div>
    )
}
export default Wrapper;