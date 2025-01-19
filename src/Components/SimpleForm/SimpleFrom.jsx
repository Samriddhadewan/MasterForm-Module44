
const SimpleFrom = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }


  return (
    <div>
        <form onSubmit={handleFormSubmit} >
            <input type="text" name="name" id="" />
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

export default SimpleFrom