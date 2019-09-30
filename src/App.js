import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';

const todoData =[
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state ={
      task:'List',
      todo: todoData
    };
  }

  toggleTask = id => {
    console.log(id);

    this.setState({
      todo: this.state.todo.map(task => {
        if(task.id === id) {
          return{
            ...task,
            added: !task.added
          };
        } else {
          return task;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      added: false
    };
    this.setState({
      todoData: [...this.state.todo, newTask]
    });
  }

  // clearTasks = () => {
  //   this.setState({
  //     todo: this.state.todo.filter()
  //   })
  // }
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
        </div>
      <TodoForm addTask={this.addTask} />
      <TodoList 
        todo={this.state.todo}
        toggleTask={this.toggleTask}
      />
        
      </div>
    );
  }
}

export default App;
