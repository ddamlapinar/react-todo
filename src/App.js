import React, { Component } from 'react';
import TodoList from  './components/TodoList'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
    this.handleChange=this.handleChange.bind(this);
  }
 handleChange(){

 }


  render(){

  return(
  

    <div>
      
      <TodoList/>
      
    </div>
  );
}
}
export default App;