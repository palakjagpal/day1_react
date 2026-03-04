import {useEffect, useState} from "react";
import "./PotterApi.css";

function PotterApi(){
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const api_url = "https://potterapi-fedeperin.vercel.app/en/spells"

    useEffect(()=> {
        fetchspells();
    }, []);

    async function fetchspells(){
        setloading(true);
        seterror("");


        try{
            const response = await fetch(api_url);
            if(!response.ok)
                throw new Error("Failed to fetch Spells!")

            const spells=await response.json();
            setdata(spells)
        }catch(err){
            seterror(err.message)
        }finally{
            setloading(false)
        }
    }
    return(
        <>
            <h1>Harry Potter Spells</h1>
            {loading && <p>Loading Spells.....</p>}
            {error && <p>{error}</p> }
            {!loading && !error && (
                <div className="Spell-container">
                    <ul>
                    {data.map((data) => {
                        return(
                            <li key={data.index}> 
                                <span>Spell : </span>{data.spell}
                                <br></br>
                                <span>Use :</span>{data.use}
                            </li>
                        )
                    })}
                    </ul>
                </div>
            )}
        </>
    )
}

export default PotterApi;