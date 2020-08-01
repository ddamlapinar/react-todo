import React from 'react';

function Todo(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#616161",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item row">
            
            <input type="checkbox" onChange={props.toogleComplete}/>
            <p style={props.todo.complete ? completedStyle : null}>{props.todo.text}</p>
            
            <div className="delete">
            <button className="btn-delete" onClick={props.handleDelete}>x</button>
            </div>
        </div>
    );
}

export default Todo;