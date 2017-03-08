import { completeAll } from '../store/Todo/actions';

class MainSectionController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();

    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
    this.filters = {
      SHOW_ALL: () => true,
      SHOW_COMPLETED: todo => todo.completed,
      SHOW_ACTIVE: todo => !todo.completed,
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

}

export const MainSection = {
  template: require('./MainSection.html'),
  controller: MainSectionController,
};
