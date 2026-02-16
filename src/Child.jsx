function Child(props){
    console.log("error", props)
    return(<>
    
        <h2>Hello, {props.title}</h2>
    </>)

}

export default Child;