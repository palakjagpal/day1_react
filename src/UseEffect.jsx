/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./UseEffect.css";

function UseEffect(){
    const [anime, setanime] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const api_url = "https://dragonball-api.com/api/characters/1";

    useEffect(() => {
        fetch_anime();
    }, []);

    async function fetch_anime(){
        setloading(true);
        seterror("");

        try{
            const response = await fetch(api_url);

            if(!response.ok){
                throw new Error("Failed to fetch Anime API");
            }

            const data = await response.json();
            setanime([data]);
        }catch(err){
            seterror(err.message);
        }finally{
            setloading(false);
        }
    }

    return(
        <>
            <h1 id="h1">Dragon Ball API</h1>
            <hr></hr>
            <br></br>
            <div className="anime-grid">   
                {loading && <p>Loading Anime.....</p>}
                {error && <h2>{error}</h2>}

                {!loading && !error && (
                    <div>
                        {anime.map((anime) => {
                            return(
                                /*
                                <li key={anime.id}><b>Name :</b>{anime.name} <br></br> 
                                <b>Race :</b>{anime.race} <br></br>
                                <b>Gender :</b>{anime.gender}
                                <br></br> <b>Affiliation :</b> {anime.affiliation}
                                <br></br> <b>Image :</b> {anime.image}
                                </li>
                                */
                               <div className="card">
                                    <img className="card-img" src={anime.image} alt={anime.name}></img>
                                    <div className="card-content" key={anime.id}>
                                        <h2>Name : {anime.name}</h2>
                                        <p>Race : {anime.race}</p>
                                        <p>Gender : {anime.gender}</p>
                                        <p>Affiliation : {anime.affiliation}</p>
                                    </div>
                               </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default UseEffect;