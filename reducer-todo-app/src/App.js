import React, { useReducer } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import { reducer, initialValue } from './reducers/reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log('App.js state: ', state);
  return (
    <div className='App'>
      <Form dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
