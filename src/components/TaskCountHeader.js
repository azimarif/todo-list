import React from 'react';

function TodoHeader(props) {
  return (
    <div className='task-count-detail'>Total {props.name} Tasks: {props.count}</div>
  )
}

export default TodoHeader;