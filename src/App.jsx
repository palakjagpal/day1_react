
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
import PasswordShowHide from "./PasswordShowHide.jsx";
import IconShowHide from "./IconShowHide.jsx";
import ValueChange from "./ValueChange.jsx";
import ConditionRender from "./ConditionRender.jsx";

function App(){
  return(
    <>
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
export default App;