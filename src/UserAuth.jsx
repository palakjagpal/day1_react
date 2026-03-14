import { useState } from "react";
import axios from "axios";
import "./UserAuth.css";

function UserAuth(){
    const [data, setdata] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] =  useState("");
    const [token, settoken] = useState("");
    const [error, seterror] = useState("");
    const [show, setshow] = useState(true);
    const [success, setsuccess] = useState("");

    const api_url = 'https://user-authentication-mongodb-demo.onrender.com/api/auth/signin'

    async function UserLogin(e) {
        if(email === "" && email.length ===0 && password === "" && password.length ===0 ){
            seterror("Please enter data!");
            console.log("Please enter data!");
        }else{
            try{
            e.preventDefault();
            const response = await axios.post(api_url,{
                email,
                password,
            })
            setdata(response.data);
            settoken(response.data.token);
            setsuccess("Login Successfull!")
            if(response.data.token){
                localStorage.setItem("token",token);
                console.log("Login Successfull!")
                console.log("Token stored in browser")
            }
            setemail("");
            setpassword("");   
            }catch(err){
                seterror("Invalid Credentials")
                console.log("Invalid Credentials")
                console.log("Error : ", err);
                setemail("");
                setpassword("");
            }
        }
    }

    return(
        <>
            {error && <div><p className="error">{error}</p></div>}

            {success && <div><p className="success">{success}</p></div>}

                <div className="main">
                    <h1>Welcome Back!</h1>
                    <form onSubmit={UserLogin}>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" placeholder="example@gmail.com" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Please enter a valid email address (e.g., user@domain.com)" value={email} required 
                            onChange={(e) => setemail(e.target.value)}></input>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type={show ? "password" : "text"} placeholder="********" maxLength="8" value={password} 
                            required 
                            onChange={(e) => setpassword(e.target.value)}></input>
                            <i className = { show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
                            onClick = {() => setshow((s) => !s)}></i>
                        </div>
                        <button type="submit">LOGIN</button>
                    </form>
                </div>
        </>
    )
}

export default UserAuth;