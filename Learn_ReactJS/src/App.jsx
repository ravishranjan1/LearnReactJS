import { useState } from "react"
function App(){
  const [gender, setGender] = useState("male")
  const [city,setCity] = useState("nalanda");
  return(
    <>
      <h1>Handle Radio and Dropdown</h1>
      <h3>Select Gender</h3>
      <input type="radio" id="male" onChange={(event)=>setGender(event.target.value)} value={"male"} checked={gender=="male"} name="gender"/>
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" onChange={(event)=>setGender(event.target.value)} value={"female"} checked={gender=="female"} name="gender" />
      <label htmlFor="female">Female</label>

      <input type="radio" id="other" onChange={(event)=>setGender(event.target.value)} value={"other"} checked={gender=="other"} name="gender" />
      <label htmlFor="other">Other</label>

      <h2>Selected Gender : {gender}</h2>
    
      <br /><br /><br />

      <h3>Select City</h3>
      
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"nalanda"}>
        <option value="patna"  name="city">Patna</option>
        <option value="rajgir"  name="city">Rajgir</option>
        <option value="nalanda"  name="city">Nalanda</option>
        <option value="gayaji"  name="city">Gayaji</option>
      </select>
      <h2>Selected City : {city}</h2>

    </>
  )
}

export default App