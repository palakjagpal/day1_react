import { useState } from "react"
import Welcome from "./Welcome.jsx";

function ConditionRender(){
    const [count, setCount] = useState(0);
    return(
        <>
            <h2>Conditional Rendering</h2>
            <h2>{`Value of count is : ${count}`}</h2>
            <button onClick = {() => setCount(count+1)}> Increment </button>

            {count >= 5 && <Welcome/>}
            {count == 10 && <Welcome/> && <> to the world</>}
            {count >15 && <Welcome/> && <> to the world of React</>}
        </>
    )
}

export default ConditionRender;