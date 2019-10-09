import * as moment from 'moment';

export const initialValue = {
  todos: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload.todo,
        completed: false,
        id: Date.now(),
        dueDate: action.payload.dueDate,
        timeDue: action.payload.timeDue
      };

      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case 'TOGGLE_COMPLETED':
      const taskID = action.payload;
      const newTodos = state.todos.map(todo => {
        if (todo.id === taskID) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: newTodos
      };

    case 'CLEAR_COMPLETED':
      const cleardTodos = state.todos.filter(todo => !todo.completed);

      return {
        ...state,
        todos: cleardTodos
      };

    case 'DUE_DATE':
    // function with new Date(); to compare with due date.  get Date() 2019-10-24 look at date methods.

    default:
      return state;
  }
}

let momentTest = moment().format('YYYY-M-D');
let date = '2019-10-15';
let dueDate = moment(date);
console.log(dueDate);
