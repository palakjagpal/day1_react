import {useState} from "react";

// It uses the useState hook to manage the visibility state of the password input field. The input type is set to "password" when the Show state is true, and "text" when it is false. The button toggles the Show state between true and false, allowing the user to show or hide the password as needed.
// State to manage the visibility of the password input field
    // Show is true when the password is hidden, and false when it is visible
    // setShow is the function to update the Show state
//Working :
//1. Initially, the Show state is set to true, which means the password input field will be of type "password", hiding the characters entered by the user.
//2. When the user clicks the button, the onClick event handler is triggered, which calls the setShow function with a callback that toggles the Show state to its opposite value (!s).
//3. If Show was true (password hidden), it becomes false (password visible), and if it was false, it becomes true again.
//4. The input field's type attribute updates accordingly, allowing the user to see or hide the password as they toggle the button. 
//This implementation provides a simple and effective way to manage the visibility of the password input field using React's state management.
//s is the previous state of Show, and !s toggles it to the opposite value
function PasswordShowHide(){
    const [Show, setShow] = useState(true);

    return(
        <div>
            <input type = { Show ? "password" : "text"} placeholder="********" maxLength="8"></input>
            <br></br>
            <button onClick = {
                () => setShow((s) => !s)}> { Show ? "Show" : "Hide"}</button> 
        </div>
    )
}

export default PasswordShowHide;