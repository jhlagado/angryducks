import { completeTodo, deleteTodo, editTodo } from '../store/Todo/actions';

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
    this.store.dispatch(editTodo(this.todo.id, text));
    this.editing = false;
  }

  handleDestroy() {
    this.store.dispatch(deleteTodo(this.todo.id));
  }

  handleChange() {
    this.store.dispatch(completeTodo(this.todo.id));
  }
}

export const TodoItem = {
  template: require('./TodoItem.html'),
  controller: TodoItemController,
  bindings: {
    todo: '<',
  }
};
