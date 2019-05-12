import React from 'react';
import TodoContext from '../context/TodoContext'
import Header from '../components/Header';
import TodoHeader from '../components/TaskCountHeader';

class PendingTasks extends React.Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context =>
          (
            <React.Fragment>
              <Header />
              <TodoHeader
                name='Pending'
                count={context.todos.filter(todo => !todo.status).length} />
              {
                context.todos.filter(todo => !todo.status).map(todo => {
                  return <div
                    className='task'
                    key={todo.id}>{todo.desc}
                  </div>
                }
                )
              }
            </React.Fragment>
          )
        }
      </TodoContext.Consumer>
    )
  }
}

export default PendingTasks;