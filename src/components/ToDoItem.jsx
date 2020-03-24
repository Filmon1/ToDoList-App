import React, {useState} from "react";

function ToDoItem(props){
    
    const[isDone, setIsDone] = useState(false);

    function handleClick() {

        setIsDone((prevValue) => {
            return !prevValue;
        });
    
    }
    return <div onClick = {handleClick}>
        <li style= {{textDecoration: isDone ? "line-through" : "none" }}>{props.text}</li>
         {isDone === true && (<button onClick ={() => {
             props.onPress(props.id);
         }}><span>Delete</span> </button>)}
   
        </div>
}

export default ToDoItem;