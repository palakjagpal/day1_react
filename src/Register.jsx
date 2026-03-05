function Register(){
    return(
        <>
            <div>
                <h1>Create an account!</h1>
                <form>
                    <label>Full Name : </label>
                    <input type="text" required></input>
                    <br></br>
                    <label>Email : </label>
                    <input type="text" required></input>
                    <br></br>
                    <button>REGISTER</button>
                </form>
            </div>
        </>
    )
}

export default Register;