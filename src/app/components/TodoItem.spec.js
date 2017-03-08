import angular from 'angular';
import 'angular-mocks';
import {TodoItem} from './TodoItem';

describe('TodoItem component', () => {
  beforeEach(() => {
    angular
      .module('todoItem', ['app/components/TodoItem.html'])
      .component('todoItem', TodoItem);
    angular.mock.module('todoItem');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<todo-item></todo-item>')($scope);
    $scope.$digest();
    const li = element.find('li');
    expect(li).not.toBeNull();
  }));

  it('should call set editing to true', angular.mock.inject($componentController => {
    const component = $componentController('todoItem', {}, {});
    spyOn(component, 'handleDoubleClick').and.callThrough();
    component.handleDoubleClick();
    expect(component.handleDoubleClick).toHaveBeenCalled();
    expect(component.editing).toEqual(true);
  }));

});
