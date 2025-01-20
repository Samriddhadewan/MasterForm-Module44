import useInputState from "../Hooks/useFromState"

const HookForm = () => {
    const [name, setname] = useInputState();
   
    const handleForm = (e) => {
        e.preventDefault();
        console.log(name)
    }

  return (

    <div>
        <form onSubmit={handleForm} >
            <input value={name} onChange={setname} type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="number" name="number" id="" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default HookForm