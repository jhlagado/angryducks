import store from '../store';
import { addTodo } from '../store/Todo/actions';

class HeaderController {

  /** @ngInject */
  constructor() {
    // console.log('!!!');
  }

  handleSave(text) {
    if (text.length !== 0) {
      store.dispatch(addTodo(text));
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
};
