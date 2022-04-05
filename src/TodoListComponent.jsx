import { memo } from "react";

const TodoList = ({ todos, onAddClick }) => {
    const n = [...Array(10000000).keys()].reduce((p,c) => p + c);
    return (
        <>
        <button onClick={onAddClick}>Add Todo</button>
        <ul>
            {
                todos.map((todo, index)=> <li key={`${todo}_${index}`}>{todo}</li>)
            }
        </ul>
        </>
    )
}

export default memo(TodoList);