import {useState} from "react";
function CheckBox(){
    const[skills, setSkills]=useState([]);
    const handleSkills=(event)=>{
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h1>Select Your Skill</h1>
            <input type="checkbox" onChange={handleSkills} id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills}  id="java" value="java" />
            <label htmlFor="java">JAVA</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills}  id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills}  id="node" value="node" />
            <label htmlFor="node">NODE</label>

            <h1>{skills.toString()}</h1>
        </div>
        
    )
}
export default CheckBox;