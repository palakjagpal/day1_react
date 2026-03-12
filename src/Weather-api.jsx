import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function Weather_api(){
    const [data,setdata] = useState([]);
    const [city, setcity] = useState("");

    async function getWeather(){
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,)
        setdata(res.data);
    }

    useEffect(() => {
        getWeather()
    }, [])

    return(
        <>
            <div>
                <form onSubmit={getWeather}>
                    <input type="text" value={city} placeholder="Enter city name" onChange={(e) => 
                    setcity(e.target.value)
                    }></input>
                    <button type="submit">SEE WEATHER</button>
                </form>
            </div>
            <div>
                s
            </div>
        </>
    )
}

export default Weather_api;