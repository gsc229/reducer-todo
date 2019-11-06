import React from 'react';
import moment from 'moment';

function TodoItem({
  item,
  dispatch,
  id,
  completed,
  dueDate,
  timeDue,
  pastDue
}) {
  const todoId = id;

  return (
    <div
      className={`task${completed ? ' completed' : ''}
         ${pastDue ? ' past-due' : ''}`}
      onClick={() => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: todoId });
      }}
    >
      <div className='todo-info'>
        <h1>{item}</h1>
        <h4>Item created {moment().calendar()}</h4>

        <h4>
          Due: {moment(dueDate).calendar()} {timeDue}
        </h4>
      </div>
    </div>
  );
}

export default TodoItem;
