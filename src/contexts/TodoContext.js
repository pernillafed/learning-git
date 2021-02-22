import { useState, createContext } from 'react';

export const TodoContext = createContext();

function TodoContextProvider(props) {

    const [todos, setTodos] = useState([
        "Clean bathroom",
        "Do dishes",
        "Order pizza"
    ]);

    const values = {
        todos
    };

    return (
        <TodoContext.Provider value={values}>
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;