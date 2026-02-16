import {useState} from "react";

function Quiz(){
    
    const [ questions, setQuestions] = useState([])
    const operators = ["+", "-", "*", "/", "%"];
    
    const generateQuestions = () => {
        const a = Math.floor(Math.random() * 101);
        const b = Math.floor(Math.random() * 101);
        const op =operators[Math.floor(Math.random()*operators.length)];
        console.log(`${a} ${op} ${b}` )
        const result = eval(`${a} ${op} ${b}`);
        return result;
        
    }
    return(
        <div>
            <h1>Quiz App</h1>
            <button onClick = {
                () => {
                    const newQuestions = generateQuestions();
                  //  setQuestions(newQuestions);

                    console.log("answer : ", newQuestions);
                }
            }>Start</button>
    
        </div>

    )
}

export default Quiz;
