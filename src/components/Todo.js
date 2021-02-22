import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function Todo(props) {

    const { removeTodo } = useContext(TodoContext);

    return (
        <div onClick={() => removeTodo(props.todo)} className="todo">
            <p>{props.todo}</p>
        </div>
    )

}

export default Todo;