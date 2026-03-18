import { useState } from "react";
import axios from "axios";
import "./UserAuth.css";

function User_Register(){
    const[data, setdata] = useState("");
    const [name,setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error,seterror] =  useState("");
    const [success, setsuccess] = useState("");
    const [show,setshow] = useState(true);

    const name_regex = /^[a-zA-Z\s-]+$/;
    const email_regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

    const api_url = "https://user-authentication-mongodb-demo.onrender.com/api/auth/signup"

    async function Register(e){
        e.preventDefault();

        seterror("");
        setsuccess("");

        if(name.trim() === "" || email.trim() === "" || password.trim() === ""){
            seterror("Please enter your details");
            console.log("Please enter your details");
            return;
        }

        if(!name_regex.test(name)){
            seterror("Enter a valid name");
            console.log("Enter a valid name");
            return;
        }

        if(!email_regex.test(email)){
            seterror("Enter a valid email address");
            console.log("Enter a valid email address");
            return;
        }

        try{
            const response = await axios.post(api_url,{
                name,
                email,
                password
            })
            //success
            setdata(response.data);
            setsuccess("User registered successfully!");
            //clear inputs after success
            setname("");
            setemail("");
            setpassword("");
        }catch(err){
            console.log("Error : ", err);  
            const serverMessage = err.response?.data?.message || "Error connecting to server";
            seterror(serverMessage);
        }
    }

    return(
        <>

            {error && (<div><p className="error">{error}</p></div>)}

            {success && (<div><p className="success">{success}</p></div>)}

            <div className="main">
                <h1>Join Us!</h1>
                <form onSubmit={Register}>

                    <div className="field">
                        <label>Name</label>
                    <input type="text" 
                    placeholder="John Doe"
                    value = {name}
                    onChange={(e) =>{
                        setname(e.target.value);
                        seterror("");
                        setsuccess("");
                    }}
                    ></input>
                    </div>

                    <div className="field">
                        <label>Email</label>
                    <input type="text" 
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);
                        seterror("");
                        setsuccess("");
                    }}
                    ></input>
                    </div>

                    <div className="field">
                        <label>Password</label>
                    <input type={show ? "password" : "text"} 
                    placeholder="********" 
                    maxLength="8"
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value);
                        seterror("");
                        setsuccess("");
                    }}
                    ></input>
                    <i className = { show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} 
                            onClick = {() => setshow((s) => !s)}></i>
                    </div>

                    <button type="submit">REGISTER</button>
                </form>
            </div>
        </>
    )
}

export default User_Register;