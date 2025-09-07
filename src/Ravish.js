import {useState} from 'react';
import User from './User';
import './Ravish.css';  //connect with css file

function Ravish() {
  const [data,setData] = useState("Ravish")
  function Apple(){
    setData("Ranjan");
    alert("Hello");
  }

  return (
    <div className="Ravish">
      {/* <h1>Hello Ravish !</h1> */}
      <h1>{data}</h1>
      <button onClick={Apple}>Update Data</button>
    </div>
  );
}

export default Ravish;