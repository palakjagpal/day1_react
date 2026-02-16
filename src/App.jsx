import "./index.css";
import PasswordShowHide from "./PasswordShowHide.jsx";
import IconShowHide from "./IconShowHide.jsx";
import ValueChange from "./ValueChange.jsx";
import ConditionRender from "./ConditionRender.jsx";
import Demo from "./demo.jsx";
import Quiz from "./Quiz.jsx";
import Prop from "./Prop.jsx";
import Parent from "./Parent.jsx";
import Child from "./Child.jsx";
import ButtonProp from "./ButtonProp.jsx";
import {useState} from "react";

/***************Components Creation****************/
/*import Compo from "./Compo.jsx";
import Compo2 from "./Compo2.jsx";

function App(){
  return(
    <div>

      Hello World!
      <Compo/>
      <Compo2/>

    </div>
  )
}

App()

export default App
*/

 /***************Counter without State****************/
 /*
import WithState from "./WithState";
import States from "./States.jsx";

function App(){
  let count = 0;
  return(
    <>

    <States />
      <h2>Counter Without State</h2>
      <p>{`Value of count is ${count}`}</p>
      <button onClick={
        () => {
          count++;
          console.log("Value of count(Without State) is : ", count);
        }
      }>Click here</button>

      <WithState/>
      

    </>
  )
}
  */

/***************Password Show Hide****************/


/*
function App(){
  return(
    <>
    <Quiz/>
    <br></br>
    <br></br>
      <Demo />
      <ConditionRender />
      <br></br>
      <br></br>
      <hr></hr>
      <PasswordShowHide />
      <br></br>
      <br></br>
      <hr></hr>
      <IconShowHide />
      <br></br>
      <br></br>
      <hr></hr>
      <ValueChange />
    </>
  )
}
  */


/************Props****************** */
/*
function App(){
  return <Prop name ="Palak" />
}
*/

/*
function App(){
  return(
    <div>
      <Parent/>
    </div>
  )
}
*/

function App(){
  const [count, setcount] = useState(0);

  const inc = () =>{
    setcount(count+1);
    console.log("Increment clicked")
    console.log("count : ",count)
  }

  const dec = () =>{
    setcount(count-1);
    console.log("Decrement clicked")
    console.log("count : ",count)
  }

  const reset = () => {
    setcount(0);
    console.log("Reset clicked")
    console.log("count : ",count);
  }

  return(
    <div>
      <ButtonProp count={count} inc={inc} dec={dec} reset={reset}/>
    </div>
  )
}

export default App;












