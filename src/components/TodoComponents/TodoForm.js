import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newItem: ''
    }
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("it's clicking!");

    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="task"
          id='task'
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }
}
export default TodoForm;