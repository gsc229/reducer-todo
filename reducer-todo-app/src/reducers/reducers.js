export const initialValue = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
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
