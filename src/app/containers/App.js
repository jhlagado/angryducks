class AppController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();
    this.store.subscribe(() => this.update());
    this.update();
  } 

  update() {
    const state = this.store.getState();
    this.todos = state.todos;
    this.filter = state.visibilityFilter;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
