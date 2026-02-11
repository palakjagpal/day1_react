/*************Counter With State******************************** */

import { useState } from "react";

function WithState(){
  const [count, setCount] = useState(0);
  return(
    <>
      <h2>Count with State</h2>
      <p>{`Value of count is ${count}`}</p>
  
  <button onClick={
    () => {
      setCount(count +1);
      console.log("Value of count(With State) is : ",count);

    }
  }>Click here</button>
    </>
  )
}

export default WithState