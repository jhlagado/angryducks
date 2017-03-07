import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { todos } from './Todo/reducers';
import visibilityFilterReducer from './visibilityFilter/reducers';
import modalReducer from './Modal/reducers';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todos,
  visibilityFilter: visibilityFilterReducer,
  modals: modalReducer,
});

const initialState = {
  todos: [{
    text: 'Use AngularJS',
    completed: false,
    id: 0
  }],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer, initialState,
  composeEnhancers(applyMiddleware(thunk))
);
