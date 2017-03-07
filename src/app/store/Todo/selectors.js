import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const makeGetVisibleTodos = () => {
  return createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed);
        default:
          return todos;
      }
    }
  );
};

