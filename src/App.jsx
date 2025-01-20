
import './App.css'
import Grandpa from './Components/Granpa/Grandpa'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleFrom from './Components/SimpleForm/SimpleFrom'
// import StateFulFrom from './Components/StateFulForm/StateFulFrom'
gsfaf



function App() {
  // const handleSubmitSignUp = data =>{
  //   console.log('signup data',data)
  // }
  // const handleSubmitLogin = data =>{
  //   console.log("submit button data",data)
  // }

  return (
    <>
      <h1>Form master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm 
      name={"Sign Up"}
      handleSubmit={handleSubmitSignUp}
      submit={"sign up"}>
        <div>
        <h3>sign up for the first time</h3>
        </div>
      </ReuseableForm> */}
      {/* <ReuseableForm 
      name={"Log in"} 
      handleSubmit={handleSubmitLogin}
      submit={"Log In"}>
        <div><h2>allways keep your profile updated</h2></div>
      </ReuseableForm> */}
    </>
  )
}

export default App
