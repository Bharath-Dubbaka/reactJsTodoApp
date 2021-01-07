import React, { Component } from 'react';

class NewTodos extends Component {
    state={
        content:""
    }
    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.addNewTodo(this.state)
        e.preventDefault();
        this.setState({
            content:''
        })
        //to clear the input panel after submit and also we enter in input field so both works insync
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New task</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>

        )
    }
}


export default NewTodos;