import angular from 'angular';
import 'angular-mocks';
import {Footer} from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    angular
      .module('footerComponent', ['app/components/Footer.html'])
      .component('footerComponent', Footer);
    angular.mock.module('footerComponent');
  });

  // it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
  //   const $scope = $rootScope.$new();
  //   $scope.activeCount = 2;
  //   const element = $compile('<footer-component></footer-component>')($scope);
  //   $scope.$digest();
  //   const footer = element.find('strong');
  //   expect(footer.html().trim()).toEqual('2');
  // }));

});

