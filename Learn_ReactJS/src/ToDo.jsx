function ToDo(){
    function callFun(){
        alert("Function Called")
    }
    return(
        <>
            <h1>Ravish Ranjan</h1>
            <img src="https://plus.unsplash.com/premium_photo-1667675417001-c4e97f0bc531?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVza3klMjA0a3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click me</button>
        </>
    )
}
export default ToDo