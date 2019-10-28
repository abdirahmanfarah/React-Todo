import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newItem: ''
    }
  }
  render() {
    return (
      <form>
        <input 
          type="text"
          name="item"
          id='item'
          value={this.state.newItem}
        />
        <button>Add</button>
      </form>
    )
  }
}
export default TodoForm;