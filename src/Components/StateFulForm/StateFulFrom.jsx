import { useState } from "react";

const StateFulFrom = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')





    const handleStateForm = (e) =>{
        e.preventDefault();
        if(pass.length < 6){
            setError("Password should have more than 6 characters")
        }
        else{
            setError("")
            console.log(name)
            console.log(email)
            console.log(pass)
        }



    }
    
    const handleName  = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) =>{
        setPass(e.target.value)
    }
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }


  return (
    <div>
        <form onSubmit={handleStateForm} >
            <input onChange={handleName} type="text" name="name" id="" />
            <br />
            <input onChange={handleEmail} type="email" name="email" id="" />
            <br />
            <input onChange={handlePassword} type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />

            {
                error && <p> {error} </p>
            }
        </form>
        
    </div>
  )
}

export default StateFulFrom