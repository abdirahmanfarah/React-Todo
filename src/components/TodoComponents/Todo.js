import React from 'react';

const Todo = props => {
  console.log(props);
  return (
    <p>{props.item.name}</p>
  )
}

export default Todo;