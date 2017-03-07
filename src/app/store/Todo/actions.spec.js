import {ADD_TODO, TOGGLE_TODO,
   toggleTodo, addTodo } from './actions';

describe('todo actions', () => {

  it('addTodo should create ADD_TODO action', () => {
    expect(addTodo('Use Redux', 1)).toEqual({
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'Use Redux'
      }
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    
    expect(toggleTodo(1)).toEqual({
      type: TOGGLE_TODO,
      payload: {
        id: 1
      }
    });
  });
});
