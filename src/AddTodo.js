import React, {Component} from 'react';


class AddTodo extends Component {
  state = {
    // creating an empty string
    content: ''
  }
  handleChange = (e) => {
    // this function is lookfor what is being typed into the input field
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    // preventDefault stop the the page ferom refreshing when you click on the event
    e.preventDefault();
    this.props.addTodo(this.state);
    // to clear the input field once the field has been submitted
    // and we pass that in the input as a property of value
    this.setState({
      content: ''
    })
  }
  render(){
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <label>Add new todo:</label>
              <input type='text' onChange={this.handleChange} value={this.state.content}/>
          </form>
        </div>
    )
  }
}


export default AddTodo;
