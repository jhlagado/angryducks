import {initialTodo} from '../todos/todos';
import store from '../store';
import { addTodo } from '../store/Todo/actions';

console.log(store);

class AppController {
  /** @ngInject */
  constructor($scope, $log) {
    const self = this;

//     self.add = () => {
//       store.dispatch(addTodo('1234'));
//     };
    
    store.subscribe(function(){
      const state = store.getState();
      // if (!state) return;
      $log.log('====> state changed', state);
      self.todos = state.todos;
      self.filter = state.filter;
    });
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
