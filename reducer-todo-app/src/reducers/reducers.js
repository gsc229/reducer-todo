import * as moment from 'moment';

if (!localStorage.getItem('todos')) {
  localStorage.setItem('todos', JSON.stringify([]));
}

export const initialValue = {
  todos: JSON.parse(localStorage.getItem('todos'))
};
console.log(initialValue);

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload.todo,
        completed: false,
        id: Date.now(),
        dueDate: action.payload.dueDate,
        timeDue: action.payload.timeDue,
        pastDue: action.payload.pastDue
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

    default:
      return state;
  }
}

let momentTest = moment().format('YYYY-M-D');
let date = '2019-10-15';
let now = moment().format('YYYY-M-D');
let nowMoment = moment(now).calendar();
let dueDate = moment(date).format('YYYY-M-D');
/* console.log(now > dueDate, now, '>', dueDate); */
