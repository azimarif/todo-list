import React from 'react';
import TodoContext from '../context/TodoContext'
import Header from '../components/Header';
import TodoHeader from '../components/TaskCountHeader';

class CompletedTasks extends React.Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context =>
          (
            <React.Fragment>
              <Header />
              <TodoHeader
                count={context.todos.filter(todo => todo.status).length}
                name='Completed'
              />
              {
                context.todos.filter(todo => todo.status).map(todo => {
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

export default CompletedTasks;