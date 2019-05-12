import React from 'react';
import TodoContext from '../context/TodoContext'
import Header from '../components/Header';
import TodoHeader from '../components/TaskCountHeader';
import AddTodo from '../components/AddTodo';

class TodoList extends React.Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context =>
          (
            <React.Fragment>
              <Header />
              <AddTodo addTodo={context.addTodo} updateInputValue={context.updateInputValue} />
              <TodoHeader count={context.todos.length} />
              {
                context.todos.map(todo => {
                  let todoClassName = 'pending';
                  if (todo.status) {
                    todoClassName = 'completed'
                  }
                  return <div
                    className={'task ' + todoClassName}
                    onClick={context.toggleTodo.bind(this, todo.id)}
                    key={todo.id}>{todo.desc}
                  </div>
                })
              }
            </React.Fragment>
          )
        }
      </TodoContext.Consumer>
    )
  }
}

export default TodoList;