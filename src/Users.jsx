import {useState, useEffect} from "react";
import axios from "axios";
import "./Users.css";
import { ToastContainer, toast } from "react-toastify";

function Users(){

    useEffect(() =>{
        fetch()
    },[])

    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [editID, seteditID] = useState(null);

    const api_url = "https://jsonplaceholder.typicode.com/posts";

    async function fetch(){
        const response = await axios.get(api_url);
        setdata(response.data);
        console.log(response.data);
        toast.success("Title fetched Sucessfully!")
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
            try{
                const response = await axios.put(`${api_url}/${editID}`,{
                id : editID,
                title : title,
                body : "Demo"
                })
                
                const newData = data.map((item) => 
                    item.id === editID ? response.data : item
                )
                setdata(newData);
                toast.success("Title updated successfully!")
                seteditID(null);
            }catch(err){
                console.error("Error updating title : ",err);
                toast.error("Cannot update title")
            }
        }else{
            const response = await axios.post(api_url, {
                title : title,
                username : "Demo",
                email : "example"
            })
            setdata([response.data, ...data]);  
            console.log("Added a new user");
            toast.success("Title added sucessfully!")
            console.log(response.data); 
        }
        settitle("");  
    }

    //fill the input only no processing
    //Click Edit → data appears in input
    //Modify data
    //Click Submit/Update → changes saved
    function edit(item){
        settitle(item?.title);
        seteditID(item?.id);
    }


    async function del(id){
        await axios.delete(`${api_url}/${id}`)
        console.log("deleted item with index : ",id );
        toast.success("Title deleted successfully!")
        setdata(data.filter(
            (item) => item.id !== id
        ))

    }

    return(
        <>
            <div className="main">
                <h2>View Titles</h2>
                <div className="form">
                    <form onSubmit={add_update}>
                        <input type="text" placeholder="Enter a new title..."
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            >
                        </input>
                        <button type="submit">{editID ? "Update" : "Add"}</button>
                    </form>
                </div>

                <div className="users">
                    {data.map((item) => {
                        return(
                            <div key={item.id} className="user-card">
                                <div className="user-text">
                                    <span className="user-id">{item.id}</span>
                                    <span className="user-title">{item.title}</span>
                                </div>

                                <div className="user-actions">
                                    <button className="edit-btn" onClick={() => edit(item)}>Edit</button>
                                    <button className="delete-btn" onClick={() => del(item.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ToastContainer position="top-right" />
        </>
    )
}

export default Users;