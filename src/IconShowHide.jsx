import {useState} from "react";

// It uses the useState hook to manage the visibility state of the password input field. The input type is set to "password" when the Show state is true, and "text" when it is false. The button toggles the Show state between true and false, allowing the user to show or hide the password as needed.
// State to manage the visibility of the password input field
    // Show is true when the password is hidden, and false when it is visible
    // setShow is the function to update the Show state
function IconShowHide(){
    const [Show, setShow] = useState(true);

    return(
        <div>
            <input type = { Show ? "password" : "text"} placeholder="********" maxLength="8"></input>
            <br></br>
            <i className = { Show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
            onClick = {
                () => setShow((s) => !s)}> </i>
        </div>
    )
}
    
export default IconShowHide;