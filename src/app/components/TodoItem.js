import { toggleTodo, deleteTodo, editTodo } from '../store/Todo/actions';

class TodoItemController {

  /** @ngInject */
  constructor(StoreService) {

    this.store = StoreService.getStore();
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text) {
    this.store.dispatch(editTodo(text, this.todo.id));
    this.editing = false;
  }

  handleDestroy() {
    this.store.dispatch(deleteTodo(this.todo.id));
  }

  handleToggle() {
    this.store.dispatch(toggleTodo(this.todo.id));
  }
}

export const TodoItem = {
  template: require('./TodoItem.html'),
  controller: TodoItemController,
  bindings: {
    todo: '<',
  }
};
