import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TodoContext from './context/TodoContext';
import TodoList from './pages/TodoList'
import PendingTasks from './pages/PendingTasks'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, desc: 'This is task 1', status: false },
        { id: 2, desc: 'This is task 2', status: false },
        { id: 3, desc: 'This is task 3', status: false },
        { id: 4, desc: 'This is task 4', status: false },
        { id: 5, desc: 'This is task 5', status: false }
      ],
      inputValue: ''
    }
  }

  updateInputValue = event => this.setState({ inputValue: event.target.value })


  toggleTodo(todoId) {
    let todos = this.state.todos;
    let selectedTodoIndex = todos.findIndex(todo => todo.id === todoId);
    let selectedTodo = { ...todos[selectedTodoIndex] };
    selectedTodo.status = !selectedTodo.status;
    todos[selectedTodoIndex] = selectedTodo;
    this.setState({ todos })
  }

  addTodo() {
    const todos = this.state.todos;
    const lastTaskIndex = todos.length - 1;
    const newTaskId = todos[lastTaskIndex].id + 1;
    const task = {
      id: newTaskId,
      desc: this.state.inputValue,
      status: false
    };
    todos.push(task);
    this.setState({ todos });
  }

  render() {
    return (
      <TodoContext.Provider value={{
        todos: this.state.todos,
        toggleTodo: this.toggleTodo.bind(this),
        addTodo: this.addTodo.bind(this),
        inputValue: this.state.inputValue,
        updateInputValue: this.updateInputValue.bind(this)
      }}>
        <HashRouter basename='/'>
          <Switch>
            <Route path='/' component={TodoList} exact />
            <Route path='/pending' component={PendingTasks} exact />
          </Switch>
        </HashRouter>
      </TodoContext.Provider>
    )
  }
}

export default App;
