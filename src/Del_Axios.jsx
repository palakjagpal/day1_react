/* eslint-disable react-hooks/immutability */
import {useState, useEffect} from "react";
import axios from "axios";

function Del_Axios(){
    const [data,setdata] = useState([]);
    const api_url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        Fetch()
    }, []);

    async function Fetch(){
        const response = await axios.get(api_url);
        setdata(response.data);
    }

    async function Del_user(id){
        await axios.delete(`${api_url}/${id}`)
        setdata(data.filter(
            (d) => d.id !== id
        ));
    }

    return(
        <>
            <div>
                <h2>Users :</h2>
                <br></br>
                <ul>
                    {data.map((d) => {
                        return(
                            <li key={d.id}> <b>ID : </b>{d.id} <br></br> <b>Name : </b>{d.name}  <br></br> <b>Username : </b> {d.username} <br></br> <b>Email :</b> {d.email} <br></br> <button onClick={() => Del_user(d.id)}>Delete</button> <hr></hr> <br></br></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Del_Axios;