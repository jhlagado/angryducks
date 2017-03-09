import cuid from 'cuid';
import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = createAction(ADD_TODO, (text, id) => {
  return {
    id: id === undefined ? cuid() : id,
    text
  };
});
export const deleteTodo = createAction(DELETE_TODO, id => { 
  return { id }; 
});

export const editTodo = createAction(EDIT_TODO, (id, text) => { 
  return { id, text }; 
});

export const completeTodo = createAction(COMPLETE_TODO, id => { 
  return { id }; 
});

export const completeAll = createAction(COMPLETE_ALL, id => { 
  return { id }; 
});

export const clearCompleted = createAction(CLEAR_COMPLETED, id => { 
  return { id }; 
});
