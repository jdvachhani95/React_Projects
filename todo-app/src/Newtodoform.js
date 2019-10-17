import React, { Component } from 'react'
import uuid from "uuid/v4";

class Newtodoform extends Component{
    constructor(props){
        super(props);
        this.state={ task:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id:uuid()});
        this.setState({task:''});
    }

    render(){
        return(
            <div className='Newtodoform'>
                <h1>hi there!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlfor='task'>New Todo</label>
                    <input type='text' id='task' name='task' value={this.state.task} onChange={this.handleChange} placeholder='New Todo'/>        
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default Newtodoform;