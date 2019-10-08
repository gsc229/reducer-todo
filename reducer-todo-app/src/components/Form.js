import React, { useState } from 'react';

function Form({ dispatch }) {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  console.log('this is the todo: Form.js: ', todo);
  console.log('this is the dueDate: Form.js: ', dueDate);
  const handleChanges = event => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleDueDate = event => {
    event.preventDefault();
    setDueDate(event.target.value);
  };

  return (
    <form
      className='todo-form'
      onSubmit={event => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
        setTodo('');
      }}
    >
      <input type='text' name='task' value={todo} onChange={handleChanges} />
      <input type='date' onChange={handleDueDate} />

      <button type='submit'>Add to list</button>
      <button
        onClick={event => {
          event.preventDefault();
          dispatch({ type: 'CLEAR_COMPLETED' });
        }}
      >
        Clear Completed
      </button>
    </form>
  );
}

export default Form;
