import {useState} from "react";

//Working:
//1. The ValueChange component uses the useState hook to manage the state of the input value. Initially, the value is set to an empty string (" ").
//2. The input field is controlled, meaning its value is determined by the state variable "value". When the user types into the input field, the onChange event is triggered.
//3. The onChange event handler updates the state with the current value of the input field using setValue(e.target.value). This ensures that the state always reflects the latest input from the user.
//e is the event object that contains information about the change event, and e.target.value gives the current value of the input field at the time of the event.
//4. The current value of the input field is displayed in an <h3> element below the input, allowing the user to see the changes in real-time as they type.
//This implementation demonstrates how to create a controlled input component in React, where the input's value is tied to the component's state, allowing for dynamic updates and real-time feedback to the user.

function ValueChange(){
    const [value, setValue] = useState(" ");
    return (
        <div>
            <h3>Value Change Using onChange :</h3>
            <input type="text" name="value" value={value} onChange={
                (e) => setValue(e.target.value)}/>

            <h3>{value}</h3>
        </div>
    );
}

export default ValueChange;