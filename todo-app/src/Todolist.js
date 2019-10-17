import React, { Component } from 'react'
import Newtodoform from './Newtodoform'
import Todo from './Todo'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={ todos:[]};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    };

    create(newTodo){
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} task={todo.task}/>
        });
        return(
            <div className='Todolist'>
                <Newtodoform id= {this.id} createTodo = {this.create} removeTodo = {this.remove}/> 
                <h1>Todo List!</h1>
                <ul>{todos}</ul>
            </div>
        );
    }
}

export default Todolist;