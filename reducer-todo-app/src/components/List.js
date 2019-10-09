import React from 'react';
import TodoItem from './TodoItem';

function List({ state, dispatch }) {
  console.log('List.js todos', state.todos);

  return (
    <div className='todo-list'>
      {state.todos.map(todoObj => (
        <TodoItem
          key={todoObj.id}
          item={todoObj.item}
          id={todoObj.id}
          completed={todoObj.completed}
          dueDate={todoObj.dueDate}
          timeDue={todoObj.timeDue}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default List;
