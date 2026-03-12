/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";

function Axios_Insert(){
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    //sconst [error,seterror] = useState(false);
    const api_url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        const response = await axios.get(api_url);
        setdata(response.data);
    }

    async function InsertData(e){
        e.preventDefault();
        if(name=== "" || name.length === 0 || email==="" || email.length===0){
            alert("Please enter valid credentials");
            console.log("Please enter valid credentials");
        }else{
            try{
                const response = await axios.post(api_url, {
                    name : name,
                    email : email,
                });
                setdata([response.data, ...data]);
                console.log(data);
                console.log("Name : ", name);
                console.log("Email : ", email);
                console.log("Credentials addedd successfully")
                setname("");
                setemail("");
            }catch(error){
                console.log("Error while inserting value : ", error);
                alert("Submission failed");
            }
        }
    }

    return(
        <>
            <div>
                <form onSubmit={InsertData}>
                    <input type="text" placeholder="Enter your name" value={name} onChange={
                        (e) => setname(e.target.value)
                    }></input>
                    <br></br>
                    <input type="text" placeholder="Enter your email" value={email} onChange={
                        (e) => setemail(e.target.value)
                    }></input>
                    <br></br>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>

            <div>
                {error && <p style="color : red;">{error}</p>}
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div>
                <ul>
                    {data.map((d) => {
                        return(
                            <li key={d.id}><b>Name : </b> {d.name} <br></br> <b>Email : </b> {d.email} <br></br> <br></br></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Axios_Insert;