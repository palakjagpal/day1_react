import {useState, useEffect} from "react";
import axios from "axios";

function Axios_Update(){

    useEffect(() =>{
        fetch()
    },[])

    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [editID, seteditID] = useState(null);

    const api_url = "https://jsonplaceholder.typicode.com/users";

    async function fetch(){
        const response = await axios.get(api_url);
        setdata(response.data);
    }

    /*
    async function add(e){
        e.preventDefault();
        const response = await axios.post(api_url, {
            name : name
        })
        setdata([response.data, ...data]);
        setname("");    
    }*/
   /*
    async function update(item){
        e.preventDefault();
        setname(item?.name);
        seteditID(item?.id);
        if(editID){
            const response = await axios.put(`${api_url}/${editID}`,{
                name : name,
                username : "Demo",
                email : "example"
            })
            const newData = data.map((item) => 
                item.id === editID ? response.data : item
            )
            setdata(newData);
            seteditID(null);
        }
    }
   */

    //if the user clicks the edit button then if part will run otherwise else part
    async function add_update(e){
        e.preventDefault();
        if(editID){
            const response = await axios.put(`${api_url}/${editID}`,{
                name : name,
                username : "Demo",
                email : "example"
            })
            const newData = data.map((item) => 
                item.id === editID ? response.data : item
            )
            setdata(newData);
            seteditID(null)
        }else{
            const response = await axios.post(api_url, {
                name : name
            })
            setdata([response.data, ...data]);  
        }
        setname("");  
    }

    //fill the input only no processing
    //Click Edit → data appears in input
    //Modify data
    //Click Submit/Update → changes saved
    function edit(item){
        setname(item?.name);
        seteditID(item?.id);
    }


    async function del(id){
        await axios.delete(`${api_url}/${id}`)
        setdata(data.filter(
            (item) => item.id !== id
        ))

    }

    
    return(
        <>
            <div className="main">
                <h2>CRUD Operations</h2>
                <div>
                    <form onSubmit={add_update}>
                        <input type="text" placeholder="Enter name..."
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            >
                        </input>
                        <button type="submit">{editID ? "Update" : "Submit"}</button>
                    </form>
                </div>
                <div>
                    {data.map((item) => {
                        return(
                            <p key={item.id}>{item.id} | {item.name} 
                            <button onClick={() => edit(item)}>EDIT</button> 
                            <button onClick={() => del(item.id)}>DELETE</button>
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Axios_Update;