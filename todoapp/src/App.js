import { Component } from "react";
import Todos from './Todos';
import NewTodos from './NewTodos';

class App extends Component {
  state = {
    todoState: [
      {id:1, content: 'But'},
      {id:2, content: 'Dut'}
    ]
  }
  deleteTodo = (id) => {
    const filteredTodo = this.state.todoState.filter(filtered => {
      return  filtered.id !== id
    });
    this.setState({
      todoState:filteredTodo
    })
    console.log(id);
  }

  addNewTodo = (newTodo) => {
    newTodo.id=Math.random();
    let newTodoState = [...this.state.todoState, newTodo]
    this.setState({
      todoState:newTodoState
    })
  }

  render() {
  return (
    <div className='todo-app container'>
      <h1 className='center orange-text'>Todo's</h1>
      <Todos todoState={this.state.todoState} deleteTodo={this.deleteTodo}/>
      <NewTodos addNewTodo={this.addNewTodo}/>

    </div>
  );
  }
}

export default App;
