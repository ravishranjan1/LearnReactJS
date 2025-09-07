import User from './User'
function Ravish() {

  function Apple(){
    return(
      <div>
        <h6>Apple Component</h6>
      </div>
    );
  }

  return (
    <div className="Ravish">
      <h1>Hello Ravish !</h1>
       <User />
       <Apple />
    </div>
  );
}

export default Ravish;