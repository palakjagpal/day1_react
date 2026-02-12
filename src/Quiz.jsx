import {useState} from "react";

function Quiz(){
    const [questions, setQuestions] = useState([])
    const operators = ["+", "-", "*", "/", "%"];
    
    const generateQuestions = () => {
        const a = Math.floor(Math.random() * 101);
        const b = Math.floor(Math.random() * 101);
        return [
            {
                question1 : `What is ${a} ${operators[Math.floor(Math.random()*operators.length)]} ${b} ?`
            },
            {
                question2: `What is ${a} ${operators[Math.floor(Math.random()*operators.length)]} ${b} ?`
            }                
        ]
    }

    return(
        <div>
            <h1>Quiz App</h1>
            <button onClick = {
                () => {
                    const newQuestions = generateQuestions();
                    setQuestions(newQuestions);
                    console.log("Questions are : ", newQuestions);                                                                       
                }
            }>Start</button>
        </div>

    )
}

export default Quiz;
