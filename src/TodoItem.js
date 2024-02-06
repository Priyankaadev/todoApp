import { useState } from "react";
import './TodoItem.css'
function handleClick( todo){
    alert( `${todo} Clicked`)
}
function TodoItem( props){
const [isFinished, setIsFinished] = useState(false);
    return (
        <div>
            <li onClick={()=> handleClick(props.todo.data)}> <span className={(isFinished)? 'todo-done':'todo-notdone'}>{props.todo.data}</span>
            </li>
            <button onClick={()=> setIsFinished(!isFinished)}>{(isFinished)? 'ReDo' : 'Done'}</button>
        </div>
    );
}

export default TodoItem;

//removing when todo finished or marked done
