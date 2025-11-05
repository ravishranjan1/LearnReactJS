import User from "./ReuseComp"
function Loop(){
    const userData=[
        {
            name : "Ravish",
            age : 23,
            mail : "ravish@deal.com",
            id : 1
        },
        {
            name : "Saloni",
            age : 21,
            mail : "saloni@deal.com",
            id : 2
        },
        {
            name : "Raj",
            age : 25,
            mail : "raj@deal.com",
            id : 3
        },
        {
            name : "Riya",
            age : 22,
            mail : "riya@deal.com",
            id : 4
        }
    ]
    // return(
    //     <div>
    //         <h2>with Map Function</h2>

    //         <table border={1}>
    //             <thead>
    //                 <tr>
    //                     <td>Id</td>
    //                     <td>Name</td>
    //                     <td>Email</td>
    //                     <td>Age</td>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     userName.map((user)=>(
    //                         <tr key={user.id}>
    //                             <td>{user.id}</td>
    //                             <td>{user.name}</td>
    //                             <td>{user.mail}</td>
    //                             <td>{user.age}</td>
    //                         </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )


    return(
        <div>
            <h1>Reuse Component</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <User data={user} />
                    </div>
                ))
            }
        </div>
    )
}
export default Loop;