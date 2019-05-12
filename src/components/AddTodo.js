import React from 'react';

const Header = (props) => (
  <header className='navigation-bar'>
    <input className='user-todo' value={props.inputValue} onChange={props.updateInputValue} placeholder='Enter task description...' ></input>
    <button className='btn' onClick={props.addTodo}>Add Todo</button>
  </header>
 )

export default Header;
