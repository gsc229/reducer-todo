import React, { useState } from 'react';
import moment from 'moment';

function Form({ dispatch }) {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [timeDue, setTimeDue] = useState('');
  /* console.log('this is the todo: Form.js: ', todo);
  console.log('this is the dueDate: Form.js: ', dueDate); */

  let dateDue = moment(dueDate).format('YYYY-M-D');
  let now = moment().format('YYYY-M-D');
  let pastDue = moment(dateDue).isBefore(now);

  const handleChanges = event => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleDueDate = event => {
    event.preventDefault();
    setDueDate(event.target.value);
  };

  const handleTimeDue = event => {
    event.preventDefault(event.target.value);
    setTimeDue(event.target.value);
  };

  return (
    <form
      className='todo-form'
      onSubmit={event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_TODO',
          payload: {
            todo: todo,
            dueDate: dueDate,
            timeDue: timeDue,
            pastDue: pastDue
          }
        });
        setTodo('');
      }}
    >
      <input type='text' name='task' value={todo} onChange={handleChanges} />
      <input type='date' onChange={handleDueDate} />
      <input type='time' onChange={handleTimeDue} />

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
