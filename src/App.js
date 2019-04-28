import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'; 

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some  milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    // filter is a non-destructive way to iterate through todos in the this.state.
    // we go through the id's in the todos
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    //this is us adding a new id to the old array in the state.
    let todos = [...this.state.todos, todo];
    //  add the new todo  to the old todos in the state
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>

      </div>
    );
  }
}

export default App;
