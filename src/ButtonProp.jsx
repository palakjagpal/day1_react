function ButtonProp({count,inc,dec,reset}){
    return(
        <div>
            <h2><u>Counter using props</u></h2>
            <h3>Count : {count}</h3>
            <button onClick={inc}> + </button>
            <button onClick={dec}> - </button>
            <button onClick={reset}> RESET </button>
        </div>
    )
}

export default ButtonProp;
