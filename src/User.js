// //Functional Components
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

// Class Components
import React,{Component} from 'react'
class User extends Component
{
    render()
    {
        return(
            <div>
                <h1>Class Component</h1>
            <h2> Hello </h2>
            </div>
        );
    }
}
export default User;