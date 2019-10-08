import React from 'react';

function TodoItem({ item, dispatch, id, completed }) {
  const todoId = id;
  return (
    <div
      className={`task${completed ? ' completed' : ''}`}
      onClick={() => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: todoId });
      }}
    >
      <h1>{item}</h1>
    </div>
  );
}

export default TodoItem;
