const ReuseableForm = ({name,handleSubmit, submit,children}) => {

    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data ={

        name:  e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
        }
        handleSubmit(data)

    }

  return (

    
    <div>
        <form onSubmit={handleLocalSubmit}>
            <h1>{name}</h1>
            {
                children
            }
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            <input type="submit" value={submit} />
        </form>
    </div>
  )
}

export default ReuseableForm