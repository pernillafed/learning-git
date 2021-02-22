import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';

function TodoList() {

    const { todos } = useContext(TodoContext);

    return (
        <div className="todoList">
            <h2>Todo list</h2>
            {todos.map((todo, i) => (
                <Todo key={i} todo={todo} />
            ))}
        </div>
    )

}

export default TodoList;