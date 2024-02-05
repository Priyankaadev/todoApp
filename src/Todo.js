import TodoItem from "./TodoItem";

function Todo(props) {
const todoItems = props.todoList.map( ( todo) => <TodoItem key={todo.id} todo={todo} />)
    return <ul>
        {todoItems} 
    </ul>
}

export default Todo;
//we used .map to render the todos in the form of list