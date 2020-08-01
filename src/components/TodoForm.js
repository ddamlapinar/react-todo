import React, { Component } from 'react';
import shortid from "shortid"
class TodoForm extends Component {
    state={
        text:"",
        

    }
    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        
            
        this.props.onSubmit({
            id:shortid.generate(),
            text:this.state.text,
            complete:false
        }
        )
        this.setState({
            text:""
        })
    }


    
    render(){
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                <div className="row todo-form">
                <input
                name="text"
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Add new task..."
                />
                <button className="btn" type="submit">+</button>
                </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;





