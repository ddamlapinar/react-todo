import React, { Component } from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
    state={
        todos:[]
    }

    addTodo=(todo)=>{
        
        this.setState({
            todos:[todo,...this.state.todos]
        })
    }

    toogleComplete=(id)=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                    ...todo,
                    complete:!todo.complete
                    }
                }
                else{
                    return todo;
                }
            })
        });

    }

    handleDelete=(id)=>{
        this.setState({
            todos:this.state.todos.filter(todo=>todo.id!==id)
        });
    }



    render() {
        return (
            <div className="todo-list">
                <h1 className="app-title">React Todo App</h1>
               <TodoForm onSubmit={this.addTodo}/>
               {this.state.todos.map(todo=>
               <Todo key={todo.id} todo={todo} 
                toogleComplete={()=>this.toogleComplete(todo.id)}
                handleDelete={()=>this.handleDelete(todo.id)}
               />)}
               
            
            </div>
        );
    }
}

export default TodoList;