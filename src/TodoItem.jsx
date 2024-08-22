export function TodoItem({id, title, completed, toggleTodo, deleteTodo}) {
    // format for each item in the todo list
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button onClick={() => {deleteTodo(id)}} className="btn btn-danger">Delete</button>
        </li>
    )
} 