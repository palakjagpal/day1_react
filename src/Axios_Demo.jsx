/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/immutability */
import{useState, useEffect} from "react";
import axios from "axios";
import "./Axios_Demo.css";

function Axios_Demo(){
    const [data, setdata] = useState([]);
    const api_url = "https://potterapi-fedeperin.vercel.app/en/spells"

    useEffect(() => {
        fetchApi()
    }, []);

    async function fetchApi(){
        const response= await axios.get(api_url);
        setdata(response.data)
        console.log(response)
    }

    return(
        <>
            <div className="main">
                <div className="table-container">
                    <h2>Harry Potter Spells</h2>
                    <table>
                        {
                            data.map((data) => {
                                return(
                                <tr key={data.index}>
                                    <td>{data.index}</td>
                                    <td>{data.spell}</td>
                                    <td>{data.use}</td>
                                </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Axios_Demo;