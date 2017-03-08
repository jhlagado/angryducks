import store from '../store';

class AppController {

  /** @ngInject */
  constructor() {
    store.subscribe(() => this.update());
    this.update();
  } 

  update() {
    const state = store.getState();
    this.todos = state.todos;
    this.filter = state.visibilityFilter;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
