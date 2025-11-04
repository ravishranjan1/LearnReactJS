function Props({user1}){
    return (
        <>
            <h1>Users Component</h1>
            <h2>Name : {user1.name}</h2>
            <h3>Age : {user1.age}</h3>
            <h4>Email : {user1.email}</h4>
        </>
    )
}
export default Props;