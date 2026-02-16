//props (short for "properties") are used to pass information from one component to another. The main purpose of props is to allow a parent component to send data to its child components.
function Prop(props){
    return(
        <div>
            <h1>Props in React</h1>
            <h2>Welcome {props.name} !!</h2>
        </div>
    )
}

export default Prop;