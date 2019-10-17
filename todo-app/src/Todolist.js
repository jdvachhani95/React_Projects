import React, { Component } from 'react'
import Newtodoform from './Newtodoform'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={ Todo:[]};
        this.create = this.create.bind(this);
    };

    create(newTodo) {
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
    }


    render(){
        const todos = this.state.todos.map(todo => {});
        return(
            <div className='Todolist'>
                <h1>hi there!</h1>
                <ul>
                    <li>Todo1</li>
                    <li>Todo2</li>
                </ul>
            </div>
        );
    }
}

export default Todolist;