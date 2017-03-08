import { clearCompleted } from '../store/Todo/actions';
import { setVisibilityFilter } from '../store/visibilityFilter/actions';

class FooterController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();

    this.filterTitles = {
      SHOW_ALL: 'All',
      SHOW_ACTIVE: 'Active',
      SHOW_COMPLETED: 'Completed'
    };

    this.store.subscribe(() => this.update());
    this.update();
  }

  update() {
    const state = this.store.getState();
    this.filter = state.visibilityFilter;

    const todos = state.todos;
    this.completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
    this.activeCount = todos.length - this.completedCount;
  }

  handleClear() {
    this.store.dispatch(clearCompleted());
  }

  handleChange(filter) {
    this.store.dispatch(setVisibilityFilter(filter));
  }
}

export const Footer = {
  template: require('./Footer.html'),
  controller: FooterController,
};
