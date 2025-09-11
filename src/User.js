// //  Functional Components
// function User()
// {
//     return(
//         <div>
//             <h1>Functional Component</h1>
//             <h2>hello</h2>
//         </div>
        
//     );
// }
// export default User;



////     Class Components
// import React,{Component} from 'react';
// class User extends Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>Class Component</h1>
//             <h2> Hello </h2>
//             </div>
//         );
//     }
// }
// export default User;


// //   State in Functional component
// import {useState} from 'react';
// function User(){
//       const [data,setData] = useState("Ravish")
//       function Apple(){
//         setData("Ranjan");
//         alert("Hello");
//       }
    
//     return(
//         <div>
//             <h1>Hello Ravish !</h1>
//             <h1>{data}</h1>
//             <button onClick={Apple}>Update Data</button>
//         </div>
//     );
// }
// export default User;


// State in class Component
import React,{Component} from 'react';
class User extends Component
{
    constructor(){
        super();
        this.state={
            data:"Ravish"
        }
    }
    apple (){
        this.setState({data:"Ranjan"})
    }
    render(){
        return(
            <div className = "User">
                <h1>Hello World !</h1>
                <h2>{this.state.data}</h2>
                <button onClick={()=>this.apple()}>Update Data</button>
            </div>
        );
    }
}
export default User;