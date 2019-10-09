import React, { useReducer } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import { reducer, initialValue } from './reducers/reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const alphaList = state.todos.sort((todoA, todoB) => {
    return todoA.dueDate < todoB.dueDate ? 1 : -1;
  });

  console.log('App.js alphaList: ', alphaList);

  localStorage.setItem('todos', JSON.stringify(state.todos));
  /* console.log('App.js state: ', state); */

  return (
    <div className='App'>
      <Form dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
