import { completeAll } from '../store/Todo/actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../store/visibilityFilter/constants';

class MainSectionController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();

    this.filters = {
      [SHOW_ALL]: () => true,
      [SHOW_COMPLETED]: todo => todo.completed,
      [SHOW_ACTIVE]: todo => !todo.completed,
    };

    this.store.subscribe(() => this.update());
    this.update();
  }

  update() {
    const state = this.store.getState();
    const filter = state.visibilityFilter;
    this.selectedFilter = this.filters[filter];
    this.todos = state.todos;
  }

  handleCompleteAll() {
    this.store.dispatch(completeAll());
  }

  isAllComplete() {
    return this.getCompleteCount() === this.todos.length;
  }

  getCompleteCount() {
    return this.todos.reduce(
      (count, todo) => todo.completed ? count + 1 : count,
      0);
  }
}

export const MainSection = {
  template: require('./MainSection.html'),
  controller: MainSectionController,
};
