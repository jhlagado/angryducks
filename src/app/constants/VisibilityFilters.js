export default {
  SHOW_ALL: { type: SHOW_ALL, filter: () => true },
  SHOW_COMPLETED: { type: SHOW_COMPLETED, filter: todo => todo.completed },
  SHOW_ACTIVE: { type: SHOW_ACTIVE, filter: todo => !todo.completed }
};
