import { addTodo } from '../store/Todo/actions';

class HeaderController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.store.dispatch(addTodo(text));
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
};
