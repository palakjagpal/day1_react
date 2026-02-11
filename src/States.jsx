import { useState } from "react";

function States(){
    const [loading, loaded] = useState(true);

    function timemca(){
        loaded(false);
        setTimeout(() => {
            loaded(true);
        },2000)
    }
    return(
        <>

        {
            loading == true ? <><h1>Loading....</h1><button onClick={timemca}>Click Here</button></> : <><h1 onMouseOver={() => loaded(true)}>Loaded</h1></>

        }
        
        </>
    )
}

export default States;

