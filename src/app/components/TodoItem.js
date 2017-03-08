import store from '../store';
import { toggleTodo, deleteTodo, editTodo } from '../store/Todo/actions';

class TodoItemController {

  constructor() {
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text) {
    store.dispatch(editTodo(text, this.todo.id));
    this.editing = false;
  }

  handleDestroy() {
    store.dispatch(deleteTodo(this.todo.id));
  }

  handleToggle() {
    store.dispatch(toggleTodo(this.todo.id));
  }
}

export const TodoItem = {
  template: require('./TodoItem.html'),
  controller: TodoItemController,
  bindings: {
    todo: '<',
  }
};
