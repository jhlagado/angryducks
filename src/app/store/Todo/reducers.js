import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
} from './actions';

// const todo = (state = {}, action) => {
//   switch (action.type) {
//     case TOGGLE_TODO:
//       if (state.id !== action.payload.id) {
//         return state;
//       }
//       return {
//         ...state,
//         completed: !state.completed
//       };
//     default:
//       return state;
//   }
// };

const todos = (state = [], action) => {
  switch (action.type) {

    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      });

    case TOGGLE_TODO:
      return state.map(function (t) {
        if (t.id === action.payload.id)
          return {
            ...t,
            completed: !t.completed
          };
        return t;
      });

    case DELETE_TODO:
      return state.filter(function (t) {
        return t.id !== action.payload.id;
      });

    case EDIT_TODO:
      return state.map(function (t) {
        if (t.id === action.payload.id)
          return {
            ...t,
            text: action.payload.text,
          };
        return t;
      });

    case CLEAR_COMPLETED:
      return state.filter(function (t) {
        return t.completed === false;
      });

    case COMPLETE_ALL: {
      const areAllMarked = state.every(t => t.completed);
      return state.map(t => {
        return {
          ...t,
          completed: !areAllMarked,
        };
      });
    }  

    default:
      return state;
  }
};

export { todos }; 
