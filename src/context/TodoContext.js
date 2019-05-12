import React from 'react';

export default React.createContext({
  state: {
    todos: [
      { id: 1, desc: 'This is task 1', status: false },
      { id: 2, desc: 'This is task 2', status: false },
      { id: 3, desc: 'This is task 3', status: false },
      { id: 4, desc: 'This is task 4', status: false },
      { id: 5, desc: 'This is task 5', status: false }
    ]
  },
  toggleTodo: todoId => { }
})