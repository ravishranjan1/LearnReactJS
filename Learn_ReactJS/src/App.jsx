import Login,{Profile,Setting,UserKey} from './UseComponents'

function App(){
  return(
    <div>
      <h1>Importing Exporting Components</h1>
      <Login />
      <Setting/>
      <Profile />
      <h1>{UserKey}</h1>
    </div>
  )
}

export default App