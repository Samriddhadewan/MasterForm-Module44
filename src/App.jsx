
import './App.css'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleFrom from './Components/SimpleForm/SimpleFrom'
// import StateFulFrom from './Components/StateFulForm/StateFulFrom'




function App() {
  const handleSubmitSignUp = data =>{
    console.log(data)
  }
  const handleSubmitLogin = data =>{
    console.log(data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
      name={"Sign Up"}
      handleSubmit={handleSubmitSignUp}
      submit={"sign up"}></ReuseableForm>
      <ReuseableForm 
      name={"Log in"} 
      handleSubmit={handleSubmitLogin}
      submit={"Log In"}></ReuseableForm>
    </>
  )
}

export default App
